import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function techstackcn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}