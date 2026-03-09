'use server';

import { z } from 'zod';
import { Resend } from 'resend';

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

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: z.infer<typeof formSchema>) {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // IMPORTANT: This must be a domain you have verified with Resend.
      to: 'karantomar322@gmail.com',
      reply_to: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `<p>You have a new contact form submission from:</p>
             <p><strong>Name:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Message:</strong></p>
             <p>${data.message}</p>`,
    });
    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
}
