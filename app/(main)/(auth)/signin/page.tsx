"use client";

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { login} from "./actions";
import { useTransition } from "react";

const formSchema = z.object({
  username:  z.string().email().refine((email) => email.endsWith('.sjp.ac.lk'), {
    message: "Email must be a valid University of Sri Jayewardenepura address",
  }),
  password: z.string().min(6).max(255),
})

export default function SignIn() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formData.append(key, values[key]);
      }
    }
    startTransition(() => {
     login(formData);
    });
    console.log(values)
  }
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Enter your university email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
        <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="ict22930@fot.sjp.ac.lk" {...field} />
              </FormControl>
              <FormDescription>
                This must be a university email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <Button type="submit" className="w-full" disabled={isPending}>
            Log In
          </Button>
        </form>
        </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
