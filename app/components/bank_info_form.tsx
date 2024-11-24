"use client";

import { useForm, UseFormReturnType } from "@mantine/form";
import { TextInput, Button, Group, Stack, Accordion } from "@mantine/core";
import { BankInfo } from "../types";
import { useBankFormContext } from "../context/BankInfoContext";

function onFromSubmit(
  form: UseFormReturnType<BankInfo>,
  setFormData: React.Dispatch<React.SetStateAction<BankInfo>>
) {
  console.log(form.values);
  setFormData(form.values);
}

export function BankInfoForm() {
  const { formData, setFormData } = useBankFormContext();

  const form = useForm<BankInfo>({
    initialValues: formData,
  });

  return (
    <Stack>
      <TextInput
        label="Bank Name"
        placeholder="Bank Name"
        {...form.getInputProps("name")}
      />
      <TextInput
        mt="md"
        label="Account Title"
        placeholder="Account Title"
        {...form.getInputProps("accountTitle")}
      />
      <TextInput
        mt="md"
        label="IBAN"
        placeholder="IBAN"
        {...form.getInputProps("iban")}
      />
      <TextInput
        mt="md"
        label="BIC"
        placeholder="BIC"
        {...form.getInputProps("bic")}
      />

      <Group align="center" mt="xl" grow>
        <Button
          variant="submit"
          onClick={() => onFromSubmit(form, setFormData)}
        >
          Save
        </Button>
      </Group>
    </Stack>
  );
}

export default function BankInfoAccordion() {
  return (
    <Accordion.Item key={"Bank Info"} value={"Bank Info"}>
      <Accordion.Control>{"Bank Info"}</Accordion.Control>
      <Accordion.Panel>
        <BankInfoForm />
      </Accordion.Panel>
    </Accordion.Item>
  );
}
