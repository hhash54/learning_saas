import { useGetCourseQuery } from "@/state/api";
import { useSearchParams } from "next/navigation";
import React from "react";

const CheckoutDetailsPage = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("id") ?? "";
  const { data: course } = useGetCourseQuery(courseId);

  return <div>CheckoutDetailsPage</div>;
};

export default CheckoutDetailsPage;
