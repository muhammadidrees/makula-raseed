import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({});

export default function Home() {
  return (
    <MantineProvider theme={theme}>
      <p>Hello, world!</p>
    </MantineProvider>
  );
}
