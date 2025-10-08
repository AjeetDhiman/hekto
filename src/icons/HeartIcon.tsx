import { useId } from "react";

export const HeartIcon: React.FC<IconProps> = (props) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Heart icon"
    role="img"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.44 3.073A4.18 4.18 0 0 0 8 2.667a4.18 4.18 0 0 0-5.44 6.32l4.967 4.966a.666.666 0 0 0 .946 0l4.967-4.966a4.18 4.18 0 0 0 0-5.914Zm-.94 4.974L8 12.54 3.5 8.047a2.853 2.853 0 0 1 2-4.867c.75.002 1.47.302 2 .833a.667.667 0 0 0 .947 0 2.847 2.847 0 0 1 4 4.034h.053Z"
    />
  </svg>
);

export const HeartIconMutated: React.FC<
  IconProps & { gradientId?: string }
> = ({ gradientId = "gradient-default", ...props }) => {
  const uniqueId = useId();
  const gradientDefaultId = `gradient-default-${uniqueId}`;
  const gradientHoverId = `gradient-hover-${uniqueId}`;
  const activeId =
    gradientId === "gradient-hover" ? gradientHoverId : gradientDefaultId;
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Heart icon"
      role="img"
      viewBox="0 0 16 16"
      {...props}
    >
      <defs>
        <linearGradient id={gradientDefaultId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1389FF" />
          <stop offset="100%" stopColor="#1DB4E7" />
        </linearGradient>
        <linearGradient id={gradientHoverId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F1AC4" />
          <stop offset="100%" stopColor="#2F1AC4" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${activeId})`} strokeWidth="0" fill="none">
        <path
          fill={`url(#${activeId})`}
          stroke={`url(#${activeId})`}
          d="M13.44 3.073A4.18 4.18 0 0 0 8 2.667a4.18 4.18 0 0 0-5.44 6.32l4.967 4.966a.666.666 0 0 0 .946 0l4.967-4.966a4.18 4.18 0 0 0 0-5.914Zm-.94 4.974L8 12.54 3.5 8.047a2.853 2.853 0 0 1 2-4.867c.75.002 1.47.302 2 .833a.667.667 0 0 0 .947 0 2.847 2.847 0 0 1 4 4.034h.053Z"
        />
      </g>
    </svg>
  );
};
