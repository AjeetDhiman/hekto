import { useId } from "react";
export const CartIcon: React.FC<IconProps> = (props) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Cart icon"
    role="img"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M.5 1.25A.75.75 0 0 1 1.25.5h.558c.95 0 1.52.639 1.845 1.233.217.396.374.855.497 1.271.033-.003.067-.004.1-.004h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H7.53a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772-1.26-4.248-.001-.008c-.156-.567-.302-1.098-.52-1.494C2.128 2.069 1.96 2 1.809 2H1.25a.75.75 0 0 1-.75-.75Zm5.073 6.59.751 2.739c.15.542.643.919 1.206.919h5.948a1.25 1.25 0 0 0 1.202-.907L16.417 4.5H4.585l.974 3.287.014.053ZM9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1.5 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM16 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1.5 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z"
    />
  </svg>
);

export const CartIconMutated: React.FC<IconProps & { gradientId?: string }> = ({
  gradientId = "gradient-default",
  ...props
}) => {
  const uniqueId = useId();
  const gradientDefaultId = `gradient-default-${uniqueId}`;
  const gradientHoverId = `gradient-hover-${uniqueId}`;
  const activeId =
    gradientId === "gradient-hover" ? gradientHoverId : gradientDefaultId;

  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Cart icon"
      role="img"
      viewBox="0 0 19 19"
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
          d="M1.98 3.365a.594.594 0 0 1 .593-.594h.442c.752 0 1.203.506 1.46.976.172.313.296.677.394 1.006l.079-.003h9.894a.99.99 0 0 1 .952 1.261l-1.447 5.074a2.18 2.18 0 0 1-2.093 1.58h-4.71a2.18 2.18 0 0 1-2.099-1.6L4.843 8.87l-.997-3.363V5.5c-.124-.448-.24-.869-.412-1.182-.166-.305-.299-.36-.418-.36h-.443a.594.594 0 0 1-.594-.593m4.015 5.217.595 2.168c.119.43.509.728.955.728h4.709a.99.99 0 0 0 .951-.719l1.375-4.822H5.213l.771 2.603zM8.708 15.042a1.583 1.583 0 1 1-3.166 0 1.583 1.583 0 0 1 3.166 0m-1.187 0a.396.396 0 1 0-.792 0 .396.396 0 0 0 .792 0M14.25 15.042a1.583 1.583 0 1 1-3.167 0 1.583 1.583 0 0 1 3.167 0m-1.187 0a.396.396 0 1 0-.792 0 .396.396 0 0 0 .792 0"
        />
      </g>
    </svg>
  );
};
