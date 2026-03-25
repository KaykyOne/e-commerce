import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Skeleton({className, ...props} : ComponentProps<'div'>) {
  return (
    <div className={twMerge(`bg-neutral-300 opacity-25 animate-pulse`, className)} {...props} />
  )
}
