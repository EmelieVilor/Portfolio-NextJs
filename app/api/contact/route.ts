import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, honeypot } = await req.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "emelie.vilor@gmail.com",
    subject: `New message from ${name}`,
    text: `From: ${email}\n\n${message}`,
  });

  if (honeypot) return NextResponse.json({ success: true });

  return NextResponse.json({ success: true });
}
