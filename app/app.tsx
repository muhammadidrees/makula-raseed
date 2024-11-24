"use client";

import { AppShell, Grid, Group, Title, Container } from "@mantine/core";
import InvoiceForm from "./components/invoice_form";
import { FormProvider } from "./context/FormContext";
import Preview from "./components/preview";

function Main() {
  return (
    <Grid>
      <Grid.Col span={3}>
        <InvoiceForm />
      </Grid.Col>
      <Grid.Col span="auto">
        <Container bg="var(--mantine-color-blue-light)" fluid h={500}>
          <Preview />
        </Container>
      </Grid.Col>
    </Grid>
  );
}

export default function App() {
  return (
    <FormProvider>
      <AppShell padding="md" header={{ height: 60 }}>
        <AppShell.Header>
          <Group h="100%" px="md">
            <Title order={3}>RASEED</Title>
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Main />
        </AppShell.Main>
      </AppShell>
    </FormProvider>
  );
}
