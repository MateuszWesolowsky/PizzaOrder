import { getMenu } from "../services/apiRestaurant";

export const menuLoader = async () => {
  const menu = await getMenu();
  return menu;
};
