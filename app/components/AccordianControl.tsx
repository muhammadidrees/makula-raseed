import { Accordion, useMantineTheme } from "@mantine/core";
import {
  IconAlertSquareRounded,
  IconSquareRoundedCheck,
} from "@tabler/icons-react";

interface AccordionControlProps {
  label: string;
  isFormEmpty: boolean;
}

export function AccordianControl({
  label,
  isFormEmpty,
}: AccordionControlProps) {
  const theme = useMantineTheme();

  return (
    <Accordion.Control
      icon={
        isFormEmpty ? (
          <IconAlertSquareRounded color={theme.colors.red[9]} />
        ) : (
          <IconSquareRoundedCheck color={theme.colors.teal[9]} />
        )
      }
    >
      {label}
    </Accordion.Control>
  );
}
