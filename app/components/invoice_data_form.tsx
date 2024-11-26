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
import { notifications } from "@mantine/notifications";

function onFromSubmit(
  form: UseFormReturnType<InvoiceData>,
  setFormData: React.Dispatch<React.SetStateAction<InvoiceData>>
) {
  console.log(form.getValues());
  setFormData(form.getValues());
  notifications.show({
    color: "green",
    title: "Invoice Data Saved",
    message: "Invoice Data has been saved successfully",
  });
}

export default function InvoiceDataAccordian() {
  const { invoiceFromData: formData, setFormData } = useInvoiceDataContext();

  const form = useForm<InvoiceData>({
    mode: "uncontrolled",
    initialValues: formData,
  });

  const isSaveDisabled =
    JSON.stringify(form.getValues()) === JSON.stringify(formData);

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
    <Accordion.Item key={"Invoice Data"} value={"Invoice Data"}>
      <Accordion.Control>Invoice Data</Accordion.Control>
      <Accordion.Panel>
        <form onSubmit={form.onSubmit(() => onFromSubmit(form, setFormData))}>
          <Stack>
            <MonthPickerInput
              mt="md"
              label="Invoice Date"
              placeholder="Invoice Date"
              withAsterisk
              key={form.key("date")}
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

            <Group align="center" mt="xl" grow>
              <Button type="submit" disabled={isSaveDisabled}>
                Save
              </Button>
            </Group>
          </Stack>
        </form>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
