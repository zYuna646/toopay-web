import { useState } from 'react';
import { ActionIcon } from '@mantine/core';
import { DashboardMenuItem, HoverableIconProps } from '@/types/dashboardMenu';
import { IconHome, IconUser, IconSettings } from '@tabler/icons-react';
import {  BG_HOVER_COLOR_DARK, BG_HOVER_COLOR_LIGHT } from './colors';
import Link from 'next/link';

export const dashboardMenu = (currentPath: string): DashboardMenuItem[] => [
  {
    id: 1,
    name: 'Home',
    path: '/dashboard',
    icon: <HoverableIcon Icon={IconHome} itemPath="/dashboard" currentPath={currentPath} />,
  },
  {
    id: 2,
    name: 'Users',
    path: '/dashboard/users',
    icon: <HoverableIcon Icon={IconUser} itemPath="/dashboard/users" currentPath={currentPath} />,
  },
  {
    id: 3,
    name: 'Settings',
    path: '/dashboard/settings',
    icon: <HoverableIcon Icon={IconSettings} itemPath="/dashboard/settings" currentPath={currentPath} />,
  },
];



const HoverableIcon: React.FC<HoverableIconProps> = ({ Icon, currentPath, itemPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ActionIcon
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      component={Link}
      href={itemPath}
      styles={{
        root: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px', 
          height: '40px',
          borderRadius: '40%', 
          backgroundColor: isHovered || currentPath==itemPath? 'black' : 'transparent', 
          transition: 'background-color 0.3s, color 0.3s', 
          padding: 0,
        },
      }}
    >
      <Icon color={isHovered || currentPath==itemPath ? BG_HOVER_COLOR_LIGHT : BG_HOVER_COLOR_DARK} />
    </ActionIcon>
  );
};