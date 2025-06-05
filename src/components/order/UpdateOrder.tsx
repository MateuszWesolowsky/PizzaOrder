import { useFetcher } from "react-router";
import { Button } from "../ui/Button";

export const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button typeOfBtn="primary">Make priority</Button>
    </fetcher.Form>
  );
};
