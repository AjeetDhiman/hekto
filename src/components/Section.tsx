import React, { type ReactNode, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, ...rest }) => {
  return (
    <section className={cn("section", className)} {...rest}>
      {children}
    </section>
  );
};

export default Section;
