import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function experiencecn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}