import { useAppDispatch } from "../../hooks";
import { Button } from "../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

interface Props {
  pizzaId: number;
  currentQuantity: number;
}

export const UpdateItemQuantity = ({ pizzaId, currentQuantity }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        typeOfBtn="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        typeOfBtn="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};
