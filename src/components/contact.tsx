
import { sendEmail } from "@/lib/sendEmail";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default async function Contact() {
    return (
        <div>
            <form className="flex flex-col items-center w-full mt-8"
                action={async (formData) => {
                    "use server";
                    await sendEmail(formData);
                }}>
                <label className="text-2xl font-bold" htmlFor="email">Email</label>
                <Input type="email" id="email" name="email" placeholder="Email address" required />
                <label className="text-2xl font-bold mt-8" htmlFor="subject">Subject</label>
                <Input type="text" id="subject" name="subject" placeholder="Subject" required />
                <label className="text-2xl font-bold mt-8" htmlFor="message">Message</label>
                <Textarea id="message" name="message" placeholder="Type your message here..." required />
                <Button className="text-lg mt-8 w-2/3" type="submit">Send</Button>
            </form>
        </div>
    );
}