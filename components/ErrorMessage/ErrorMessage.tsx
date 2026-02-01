import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  error: Error;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <p>Could not fetch the list of notes. {error.message}</p>;
};

export default ErrorMessage;
