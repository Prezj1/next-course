import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESND_API_KEY
);

export async function POST() {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "joymakasi@hotmail.co.uk",
    subject: "Hello World",
    react: (
      <WelcomeTemplate name="Joy" />
    ),
  });

  return NextResponse.json({});
}
