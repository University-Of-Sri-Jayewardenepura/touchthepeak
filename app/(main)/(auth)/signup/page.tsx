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
import { signup } from "./actions";
import { useTransition } from "react";

const formSchema = z.object({
  username:  z.string().email().refine((email) => email.endsWith('.sjp.ac.lk'), {
    message: "Email must be a valid University of Sri Jayewardenepura address",
  }),
  password: z.string().min(6).max(255),
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
})




export default function SignUp() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
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
     signup(formData);
    });
    console.log(values)
  }

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
        Enter your name and university email to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Pruthivi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Thejan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
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
            <FormItem >
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <Button type="submit" className="w-full" disabled={isPending}>
            Create an account
          </Button>
        </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
    </section>
  )
}
