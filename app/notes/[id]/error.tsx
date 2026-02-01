"use client";

import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

interface ErrorPageProps {
  error: Error;
}

const ErrorPage = ({ error }: ErrorPageProps) => {
  return (
    <div>
      <ErrorMessage error={error} />
    </div>
  );
};

export default ErrorPage;
