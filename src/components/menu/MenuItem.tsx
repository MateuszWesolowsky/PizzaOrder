import type { PizzaTypes } from "../../types/types";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../ui/Button";

interface PizzaListProps {
  pizza: PizzaTypes;
}

export const MenuItem = ({
  pizza: { id, name, unitPrice, ingredients, soldOut, imageUrl },
}: PizzaListProps) => {
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
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
};
