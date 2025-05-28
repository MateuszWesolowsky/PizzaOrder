import { useState } from "react";
import { Button } from "../ui/Button";
import { useAppDispatch } from "../../hooks";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router";

export const CreateUser = () => {
  const [username, setUsername] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button to="/order/new" type="primary">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
};
