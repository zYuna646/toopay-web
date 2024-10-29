import { ReactNode } from "react";
export interface DashboardMenuItem {
  id: number;
  name: string;
  path: string;
  icon: ReactNode;
}

export interface HoverableIconProps {
    Icon: React.ComponentType<{ color?: string }>;
    currentPath: string;
    itemPath: string;
  }