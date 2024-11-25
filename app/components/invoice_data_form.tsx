"use client";

import { useForm, UseFormReturnType } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Stack,
  Accordion,
  ActionIcon,
  Text,
  NumberInput,
} from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { InvoiceData } from "../types";
import { useInvoiceDataContext } from "../context/InvoiceDataContext";
import { IconTrash, IconCurrencyEuro } from "@tabler/icons-react";
import { randomId } from "@mantine/hooks";

function onFormSubmit(
  form: UseFormReturnType<InvoiceData>,
  setFormData: React.Dispatch<React.SetStateAction<InvoiceData>>
) {
  console.log(form.values);
  setFormData(form.values);
}

export default function InvoiceDataForm() {
  const { formData, setFormData } = useInvoiceDataContext();

  const form = useForm<InvoiceData>({
    mode: "uncontrolled",
    initialValues: formData,
  });

  const fields = form.getValues().items.map((item, index) => (
    <Group key={item.key}>
      <TextInput
        placeholder="Desription"
        withAsterisk
        style={{ flex: 4 }}
        key={form.key(`items.${index}.description`)}
        {...form.getInputProps(`items.${index}.description`)}
      />

      <NumberInput
        placeholder="Qty"
        style={{ flex: 1 }}
        key={form.key(`items.${index}.quantity`)}
        {...form.getInputProps(`items.${index}.quantity`)}
      />
      <NumberInput
        placeholder="Amount"
        style={{ flex: 1 }}
        key={form.key(`items.${index}.price`)}
        {...form.getInputProps(`items.${index}.price`)}
        hideControls
        rightSection={<IconCurrencyEuro />}
      />

      <ActionIcon
        color="red"
        disabled={index === 0}
        onClick={() => form.removeListItem("items", index)}
      >
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  return (
    <Stack>
      <MonthPickerInput
        mt="md"
        label="Invoice Date"
        placeholder="Invoice Date"
        {...form.getInputProps("date")}
      />

      {fields.length > 0 ? (
        <Group>
          <Text fw={500} size="sm">
            Invoice Items
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No items added...
        </Text>
      )}

      {fields}

      <Group align="center" mb="xl" grow>
        <Button
          onClick={() =>
            form.insertListItem("items", {
              description: "",
              quantity: 1,
              price: 0,
              key: randomId(),
            })
          }
        >
          Add item
        </Button>
      </Group>
    </Stack>
  );
}

export function InvoiceDataAccordion() {
  return (
    <Accordion.Item key={"Invoice Date Info"} value={"Invoice Date Info"}>
      <Accordion.Control>{"Invoice Date Info"}</Accordion.Control>
      <Accordion.Panel>
        <InvoiceDataForm />
      </Accordion.Panel>
    </Accordion.Item>
  );
}
