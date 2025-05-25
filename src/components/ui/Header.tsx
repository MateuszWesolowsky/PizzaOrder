import { Link } from "react-router";
import { SearchOrder } from "../order/SearchOrder";
import { Username } from "../user/Username";

export const Header = () => {
  return (
    <header className="flex items-center justify-around border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        React Pizz Order
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};
