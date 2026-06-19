import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  subject: z.string().trim().min(3).max(120),
  message: z.string().trim().min(10).max(1500),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form fields and try again." },
      { status: 400 }
    );
  }

  const { name, email, subject, message, website } = parsed.data;

  if (website) {
    return NextResponse.json({
      message: "Message sent. I will get back to you soon.",
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "imhamza020207@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "The secure contact form is temporarily unavailable. Please email me directly at imhamza020207@gmail.com.",
      },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({
      message: "Message sent. I will get back to you soon.",
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Message could not be sent right now. Please email me directly at imhamza020207@gmail.com.",
      },
      { status: 503 }
    );
  }
}
