import { useLoaderData } from "react-router";
import { MenuItem } from "./MenuItem";
import type { PizzaTypes } from "../../types/types";

export const Menu = () => {
  const menu = useLoaderData<PizzaTypes[]>();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};
