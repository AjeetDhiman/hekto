import { type IconProps } from "../utils/types";

export const UserIcon: React.FC<IconProps> = (props) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="User icon"
    role="img"
    {...props}
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M8 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0-1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM13 15h-1v-2.5A2.5 2.5 0 0 0 9.5 10h-3A2.5 2.5 0 0 0 4 12.5V15H3v-2.5A3.5 3.5 0 0 1 6.5 9h3a3.5 3.5 0 0 1 3.5 3.5V15Z"
    />
  </svg>
);
