import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function projectscn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}