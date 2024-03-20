import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function aboutmecn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
