import { type IconProps } from "../utils/types";

export const EnvelopeIcon: React.FC<IconProps> = (props) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Camera icon"
    role="img"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11.667.667H2.333a2 2 0 0 0-2 2v6.666a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2V2.667a2 2 0 0 0-2-2ZM2.333 2h9.334a.667.667 0 0 1 .666.667L7 5.92 1.667 2.667A.667.667 0 0 1 2.333 2Zm10 7.333a.667.667 0 0 1-.666.667H2.333a.667.667 0 0 1-.666-.667V4.187l4.986 3.046a.667.667 0 0 0 .667 0l5.013-3.046v5.146Z"
    />
  </svg>
);
