import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import App from "./app";

const theme = createTheme({});

export default function Home() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  );
}
