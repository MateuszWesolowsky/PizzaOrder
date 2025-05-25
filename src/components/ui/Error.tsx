import { useRouteError } from "react-router";
import { LinkButton } from "./LinkButton";

type RouteError = {
  message?: string;
  data?: string;
};

export const Error = () => {
  const error = useRouteError() as RouteError;

  const errorMessage = error.data || error.message;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorMessage}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
};
