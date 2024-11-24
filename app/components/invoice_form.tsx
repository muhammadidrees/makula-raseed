"use client";

import { useForm, UseFormReturnType } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { PersonalInfo } from "../types";
import { useFormContext } from "../context/FormContext";

function onFromSubmit(
  form: UseFormReturnType<PersonalInfo>,
  setFormData: React.Dispatch<React.SetStateAction<PersonalInfo>>
) {
  console.log(form.values);
  setFormData(form.values);
}

export default function InvoiceForm() {
  const { formData, setFormData } = useFormContext();

  const form = useForm<PersonalInfo>({
    initialValues: formData,
  });

  return (
    <Box maw={420}>
      <TextInput
        label="Name"
        placeholder="Name"
        {...form.getInputProps("name")}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        {...form.getInputProps("email")}
      />

      <TextInput
        mt="md"
        label="Tax ID"
        placeholder="Tax ID"
        {...form.getInputProps("taxID")}
      />

      <TextInput
        mt="md"
        label="Address"
        placeholder="Address"
        {...form.getInputProps("address.street")}
      />

      <Group grow>
        <TextInput
          mt="md"
          label="City"
          placeholder="City"
          {...form.getInputProps("address.city")}
        />
        <TextInput
          mt="md"
          label="Zip"
          placeholder="Zip"
          {...form.getInputProps("address.zip")}
        />
      </Group>

      <Group align="center" mt="xl">
        <Button
          variant="submit"
          onClick={() => onFromSubmit(form, setFormData)}
        >
          Submit
        </Button>
      </Group>
    </Box>
  );
}
