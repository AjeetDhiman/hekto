import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names conditionally and merge Tailwind CSS classes cleanly.
 * Filters out falsy values and merges conflicting Tailwind classes.
 * @param inputs - class names, conditionals, arrays, etc.
 * @returns merged class string
 */
export function classMerge(...inputs: any[]): string {
	const resolved = clsx(...inputs);
	const cleaned = resolved.split(/\s+/).filter(Boolean).join(" ");
	return twMerge(cleaned);
}
