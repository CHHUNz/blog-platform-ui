"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import Link from "next/link";
import {Label} from "@/components/ui/label";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 digit.",
    }),
    role: z.string().min(2, {
        message: "Role must be at least 2 digit.",
    }),

})

export function RegisterForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password:"",
            role:""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className="w-[350px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({field}) => (
                            <FormItem>
                                {/*<FormLabel>Username</FormLabel>*/}
                                <FormControl>
                                    <Input placeholder="Username" {...field} />
                                </FormControl>
                                <FormDescription>

                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                {/*<FormLabel>Password</FormLabel>*/}
                                <FormControl>
                                    <Input placeholder="Password" {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="role"
                        render={({field}) => (
                            <FormItem>
                                {/*<FormLabel>Role</FormLabel>*/}
                                <FormControl>
                                    <Input placeholder="Role" {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage/>

                            </FormItem>
                        )}
                    />
                    <div>
                        <Button type="submit" className="w-full mb-1">Register</Button>
                        <Label >
                            Do you already have an account?
                            <Link href={"/login"} className="text-blue-600"> Login </Link>
                        </Label>
                    </div>

                </form>
            </Form>
        </div>

    )
}

export default RegisterForm