'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const formSchema = z.object({
    name: z.string({ message: "Name is required" }).min(1, { message: "Name is required" }),
    email: z.string({ message: "Email is required" }).email({ message: "Email is invalid" }),
    message: z.string({ message: "Message is required" }).min(1, { message: "Message is required" }),
});

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
        mode: "onSubmit",
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        const { name, email, message } = values;
        const subject = "New Contact Form Submission";
        const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const mailto = `mailto:contact@zidd.dev?subject=${subject}&body=${body}`;
        window.open(mailto, '_blank');

        setTimeout(() => {
            form.reset();
            setIsSubmitting(false);
        }, 1000);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off" className="space-y-8">
                <div role="group" className="grid sm:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="john doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="john@doe.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="sm:col-span-2">
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Hello, I want to collaborate with you!" rows={3} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" className="ms-auto block" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Say hi!"}</Button>
            </form>
        </Form>
    )
}