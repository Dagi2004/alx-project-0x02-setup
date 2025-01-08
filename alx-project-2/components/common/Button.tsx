import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-md",
    large: "px-6 py-3 text-lg",
  };
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": " rounded-md",
    "rounded-full": "rounded-full",
  };
  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shapeClasses[shape]}hover:bg-blue-700`}
    >
      {children}
    </button>
  );
};
export default Button;
