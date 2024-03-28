import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function projecttitlecn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
