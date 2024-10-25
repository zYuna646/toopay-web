"use client";

import { ReactNode } from "react";
import { AppShell, Group, Burger, Text, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
interface DashboardLayoutProps {
  children: ReactNode;
}
import { PRIMARY_BG_COLOR, PRIMARY_TEXT_COLOR } from "@/constants/colors";
import { dashboardMenu } from "@/constants/dashboardMenu";
import { DashboardMenuItem } from "@/types/dashboardMenu";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname()
  console.log(pathname);
  
  return (
    <AppShell
      bg={PRIMARY_BG_COLOR}
      header={{ height: 60 }}
      navbar={{ width: 100, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header bg={PRIMARY_BG_COLOR}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          {/* <MantineLogo size={30} /> */}
          <Text c={PRIMARY_TEXT_COLOR} fw={700}>
            Toopay
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" bg={PRIMARY_BG_COLOR}>
        <Stack justify="center" gap="md" align="center">
          {dashboardMenu(pathname).map((item: DashboardMenuItem) => (
            <Group key={item.id} align="center">
              {item.icon}
            </Group>
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main bg={PRIMARY_BG_COLOR}>{children}</AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
