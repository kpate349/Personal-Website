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
  "bot-field"?: string;
};

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", message: "", "bot-field": "" },
  });

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const onSubmit = async (values: ContactFormValues) => {
    console.log("THISSSS");
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    });

    toast({ title: "Message sent" });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        data-netlify="true"
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        className="max-w-2xl mx-auto space-y-4 p-6 rounded-lg border bg-card/80 backdrop-blur-sm"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" {...form.register("bot-field")} />

        <h3 className="text-xl font-semibold">Contact Me</h3>

        <FormField
          control={form.control}
          name="name"
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Please enter a valid email",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          rules={{
            required: "Message is required",
            minLength: { value: 10, message: "Message is too short" },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell me about your project..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </Form>
  );
}
