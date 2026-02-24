import { notFound } from "next/navigation";
import { courses } from "@/lib/data";
import { CheckoutClient } from "./checkout-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `Checkout - ${course.title} - LearnWithSandi`,
    description: `Complete your purchase of ${course.title}.`,
  };
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) notFound();

  return <CheckoutClient course={course} />;
}
