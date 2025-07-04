import { useAppSelector } from "../../hooks";
import { CreateUser } from "../user/CreateUser";
import { Button } from "./Button";

export const Home = () => {
  const userName = useAppSelector((state) => state.user.userName);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!userName ? (
        <CreateUser />
      ) : (
        <Button to="/menu" typeOfBtn="primary">
          Continue ordering, {userName}
        </Button>
      )}
    </div>
  );
};
