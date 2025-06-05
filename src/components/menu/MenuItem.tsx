import { useAppDispatch, useAppSelector } from "../../hooks";
import type { PizzaTypes } from "../../types/types";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { DeleteItem } from "../cart/DeleteItem";
import { UpdateItemQuantity } from "../cart/UpdateItemQuantity";
import { Button } from "../ui/Button";

interface PizzaListProps {
  pizza: PizzaTypes;
}

export const MenuItem = ({
  pizza: { id, name, unitPrice, ingredients, soldOut, imageUrl },
}: PizzaListProps) => {
  const dispatch = useAppDispatch();

  const currentPizzaQuantity = useAppSelector(getCurrentQuantityById(id));

  const isInCart = currentPizzaQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`${soldOut ? "opacity-70 grayscale" : ""} h-24`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between sm:flex-nowrap">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                currentQuantity={currentPizzaQuantity}
                pizzaId={id}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button typeOfBtn="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};
