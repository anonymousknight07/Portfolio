import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function journalscn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
