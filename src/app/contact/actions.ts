'use server';

import { z } from 'zod';

// The schema is defined here for the server action's type safety, but not exported.
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

export async function submitContactForm(data: z.infer<typeof formSchema>) {
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
