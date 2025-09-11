import React, { type ReactNode, type HTMLAttributes } from "react";
import { classMerge } from "../utils/classMerge";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}

const Container: React.FC<ContainerProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<div
			className={classMerge("max-w-[1180px] mx-auto px-4", className)}
			{...rest}>
			{children}
		</div>
	);
};

export default Container;
