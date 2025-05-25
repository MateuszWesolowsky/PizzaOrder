import { Outlet, useNavigation } from "react-router";
import { Header } from "./Header";

import { Spinner } from "./Spinner";
import { CartOverview } from "../cart/CartOverview";

export const Layout = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";

  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Spinner />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};
