import { Button, Container, Text, Title } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <Container size="sm" style={{ textAlign: "center", padding: "2rem" }}>
      <Title order={1} mb="md">
        Welcome to Next.js with Mantine
      </Title>
      <Text mb="md">
        This is a sample project using Mantine UI with Next.js and TypeScript
      </Text>
      <Button variant="filled" color="blue" size="lg">
        Get Started
      </Button>
    </Container>
  );
}
