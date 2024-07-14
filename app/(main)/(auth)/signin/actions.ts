"use server";

import { verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/database";
import { eq } from "drizzle-orm";
import { userTable } from "@/database/schema";

export default async function Page() {}

export async function login( formData: FormData) {
	const username = formData.get("username");

	// username must be a valid email address ending with .sjp.ac.lk
	const emailRegex = /^[^\s@]+@(?:[^\s@]+\.)*sjp\.ac\.lk$/;
	if (typeof username !== "string" || !emailRegex.test(username)) {
		return {
			error: "Email must be a valid University of Sri Jayewardenepura address (ending with .sjp.ac.lk)"
		};
	}

	const password = formData.get("password");
	
	if (typeof password !== "string" || password.length < 6 || password.length > 255) {
		return {
			error: "Invalid password"
		};
	}

	const existingUser = await db
        .query.userTable.findFirst({
            where: eq(userTable.username, username.toLowerCase()),
        });
	if (!existingUser) {
		// NOTE:
		// Returning immediately allows malicious actors to figure out valid usernames from response times,
		// allowing them to only focus on guessing passwords in brute-force attacks.
		// As a preventive measure, you may want to hash passwords even for invalid usernames.
		// However, valid usernames can be already be revealed with the signup page among other methods.
		// It will also be much more resource intensive.
		// Since protecting against this is non-trivial,
		// it is crucial your implementation is protected against brute-force attacks with login throttling etc.
		// If usernames are public, you may outright tell the user that the username is invalid.
		return {
			error: "Incorrect username or password"
		};
	}

	const validPassword = await verify(existingUser.password_hash, password, {
		memoryCost: 19456,
		timeCost: 2,
		outputLen: 32,
		parallelism: 1
	});
	if (!validPassword) {
		return {
			error: "Incorrect username or password"
		};
	}

	const session = await lucia.createSession(existingUser.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/");
}