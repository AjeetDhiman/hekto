import React, { type ReactNode, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

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
    <div className={cn("mx-auto max-w-[1180px] px-4", className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
