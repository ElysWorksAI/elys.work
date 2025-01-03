import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Elys",
  description:
    "Get in touch with Elys for AI technology solutions and services.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
