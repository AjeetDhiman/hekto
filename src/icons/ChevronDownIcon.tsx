import { type IconProps } from "../utils/types";

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="ChevronDown icon"
    role="img"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.667 6 8 11.333 13.333 6"
    />
  </svg>
);
