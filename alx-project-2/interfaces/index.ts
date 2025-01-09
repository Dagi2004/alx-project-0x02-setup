export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}
export interface PostProps {
  title: string;
  id: number;
  body: string;
  userId: number;
}
export interface UserProps {
  id: number;
  name: string;
  username: string;
  phone: number;
  website: string;
}
