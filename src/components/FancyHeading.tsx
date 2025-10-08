import { cn } from "@/lib/utils";
interface FancyHeading extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

const FancyHeading: React.FC<FancyHeading> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h2
      className={cn(
        "text-dark-indigo mb-12 text-center text-[42px] font-bold",
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  );
};

export default FancyHeading;
