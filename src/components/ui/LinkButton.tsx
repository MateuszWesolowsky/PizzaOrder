import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router";

type ButtonProps = {
  children: ReactNode;
  to: string;
};
export const LinkButton = ({ children, to }: ButtonProps) => {
  const navigate = useNavigate();
  const className =
    "text-sm text-blue-500 hover:text-blue-600 hover:underline cursor-pointer";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
