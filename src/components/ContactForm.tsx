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
  const formData = new URLSearchParams();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("message", values.message);

console.log(formData.toString()); // prints as "name=John&email=test@example.com&message=Hello"
  
  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });

    if (res.ok) {
      toast({ title: "Message sent", description: "Thanks — I will get back to you soon." });
      form.reset();
    } else {
        throw new Error(`Server responded with ${res.status}: ${res.statusText}`);
    }
  } catch (e: any) {
  const subject = encodeURIComponent(`Website contact from ${values.name}`);
  const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`);
  window.location.href = `mailto:pkush74@gmail.com?subject=${subject}&body=${body}`;
  toast({ title: "Error", description: e?.message || String(e) });
}
};


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto space-y-4 p-6 rounded-lg border bg-card/80 backdrop-blur-sm"
        data-netlify="true"
        name="contact-form"
        method="post"
      >

        <input type="hidden" name="form-name" value="contact-form" />

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
  );
}
