import type { ReactNode } from "react";
import { Link } from "react-router";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  typeOfBtn: "primary" | "small" | "secondary" | "round";
  type?: "submit" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export const Button = ({
  children,
  disabled,
  to,
  typeOfBtn,
  type,
  onClick,
}: ButtonProps) => {
  const base =
    "cursor-pointer text-sm rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed inline-block";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "cursor-pointer text-sm rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:text-stone-800 hover:bg-stone-300 focus:ring focus:text-stone-800 focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed inline-block px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[typeOfBtn]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styles[typeOfBtn]}
        type={type}
      >
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[typeOfBtn]} type={type}>
      {children}
    </button>
  );
};
