import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function journaltitlecn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
