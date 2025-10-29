import * as React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    await fetch("/", { method: "POST", body: formData });
    toast({ title: "Message sent" });
    form.reset();
  };

  return (
    <>
      {/* Netlify form detection */}
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto space-y-4 p-6 rounded-lg border bg-card/80 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold">Contact Me</h3>

          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormField
              name="name"
              control={form.control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
              )}
            />
            <FormMessage />
          </FormItem>

          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormField
              name="email"
              control={form.control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Please enter a valid email",
                },
              }}
              render={({ field }) => (
                <FormControl>
                  <Input placeholder="you@example.com" type="email" {...field} />
                </FormControl>
              )}
            />
            <FormMessage />
          </FormItem>

          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormField
              name="message"
              control={form.control}
              rules={{ required: "Message is required", minLength: { value: 10, message: "Message is too short" } }}
              render={({ field }) => (
                <FormControl>
                  <Textarea placeholder="Tell me about your project..." {...field} />
                </FormControl>
              )}
            />
            <FormMessage />
          </FormItem>

          <div className="flex justify-end">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
