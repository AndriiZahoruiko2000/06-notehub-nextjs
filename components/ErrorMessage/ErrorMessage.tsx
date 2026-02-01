import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return <p>Could not fetch the list of notes. {error.message}</p>;
};

export default ErrorMessage;
