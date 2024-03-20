import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function herosectioncn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
