"use client";

import { useForm, UseFormReturnType } from "@mantine/form";
import { TextInput, Button, Group, Stack, Accordion } from "@mantine/core";
import { CompanyInfo } from "../types";
import { useCompanyFormContext } from "../context/CompanyInfoContext";

function onFromSubmit(
  form: UseFormReturnType<CompanyInfo>,
  setFormData: React.Dispatch<React.SetStateAction<CompanyInfo>>
) {
  console.log(form.values);
  setFormData(form.values);
}

export function CompanyInfoForm() {
  const { formData, setFormData } = useCompanyFormContext();

  const form = useForm<CompanyInfo>({
    initialValues: formData,
  });

  return (
    <Stack>
      <TextInput
        label="Company Name"
        placeholder="Company Name"
        {...form.getInputProps("companyName")}
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

export default function CompanyInfoAccordion() {
  return (
    <Accordion.Item key={"Company Info"} value={"Company Info"}>
      <Accordion.Control>{"Company Info"}</Accordion.Control>
      <Accordion.Panel>
        <CompanyInfoForm />
      </Accordion.Panel>
    </Accordion.Item>
  );
}
