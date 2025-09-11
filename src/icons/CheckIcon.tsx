import { type IconProps } from "../utils/types";

export const CheckIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-label="Check icon"
    role="img"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 1 6 12 1 7"
    />
  </svg>
);
