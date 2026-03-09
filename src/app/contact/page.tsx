'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { useToast } from "@/hooks/use-toast";
import { useTransition } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

async function submitContactForm(data: z.infer<typeof formSchema>) {
  'use server';
  
  // In a real application, you would integrate an email service here.
  // For example, using Resend, SendGrid, or Mailgun.
  //
  // Example with Resend:
  // 1. Install the Resend SDK: `npm install resend`
  // 2. Get an API key from https://resend.com
  // 3. Add it to your .env file: `RESEND_API_KEY=your_key_here`
  // 4. Uncomment and adapt the code below:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // try {
  //   await resend.emails.send({
  //     from: 'onboarding@resend.dev', // Must be a domain you own
  //     to: 'your-personal-email@example.com',
  //     subject: `New Contact Form Submission from ${data.name}`,
  //     html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
  //   });
  //   return { success: true, message: 'Your message has been sent successfully!' };
  // } catch (error) {
  //   console.error('Email sending error:', error);
  //   return { success: false, message: 'Failed to send message.' };
  // }

  console.log('New contact form submission received:');
  console.log(data);

  // For this demo, we'll just simulate a successful submission without sending a real email.
  return { success: true, message: 'Your message has been sent successfully!' };
}

export default function ContactPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
        const result = await submitContactForm(values);
        if (result.success) {
            toast({
                title: "Message Sent!",
                description: result.message,
            });
            form.reset();
        } else {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: result.message || "There was a problem with your request.",
            });
        }
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black">
      <Header />
      <main className="flex-1">
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-400 sm:text-xl">
              Have questions or want to discuss a project? Fill out the form below, and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project or ask a question..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
