"use server";

import { error } from "console";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('email');
    const message = formData.get('message');
    const subject = formData.get('subject');
    console.log(senderEmail, message, subject);

    if (!senderEmail || !message || typeof senderEmail !== 'string' || typeof message !== 'string' || typeof subject !== 'string') {
        return{
            error: 'Email and message are required'
        }
    }
    console.log('Is this ran?');
    await resend.emails.send({
        from: 'Contact form <onboarding@resend.dev>',
        to: 'resend.strained461@passmail.net',
        reply_to: senderEmail,
        subject: subject,
        text: message,
    });
};