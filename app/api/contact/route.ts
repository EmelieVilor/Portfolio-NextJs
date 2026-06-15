import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, honeypot } = await req.json();

  if (honeypot) return NextResponse.json({ success: true });

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "emelie.vilor@gmail.com",
    subject: `Portfolio message from ${name}`,
    text: `From: ${email}\n\n${message}`,
    html: `<div style="font-family: sans-serif; margin: auto; padding: 24px;">
      <h2 style="font-size: 20px;">New message from: ${name}</h2>
      <p><strong>From:</strong> ${email}</p>
      <hr style="border: none; border-top: 1px solid #eee;" />
      <p style="font-size: 16px; line-height: 1.6;">${message}</p>
    </div>`,
  });

  return NextResponse.json({ success: true });
}
