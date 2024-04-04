import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function testcn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
