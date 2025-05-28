import { useAppDispatch } from "../../hooks";
import { Button } from "../ui/Button";
import { deleteItem } from "./cartSlice";

interface Props {
  pizzaId: number;
}

export const DeleteItem = ({ pizzaId }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
};
