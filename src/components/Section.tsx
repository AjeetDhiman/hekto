import React, { type ReactNode, type HTMLAttributes } from "react";
import { classMerge } from "../utils/classMerge";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, ...rest }) => {
	return (
		<div className={classMerge("section", className)} {...rest}>
			{children}
		</div>
	);
};

export default Section;
