"use server";

import { db } from "@/database";
import { hash } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import { redirect } from "next/navigation";
import { generateIdFromEntropySize } from "lucia";
import { userTable } from "@/database/schema";

export default async function Page() {}

export async function signup(formData: FormData) {
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

	const passwordHash = await hash(password, {
		// recommended minimum parameters
		memoryCost: 19456,
		timeCost: 2,
		outputLen: 32,
		parallelism: 1
	});
	const userId = generateIdFromEntropySize(10); // 16 characters long

	const name = formData.get("first_name") + " " + formData.get("last_name");
	
	await db.insert(userTable).values({
		id: userId,
		name: name,
		username: username,
		password_hash: passwordHash
	});

	const session = await lucia.createSession(userId, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/signin");
}