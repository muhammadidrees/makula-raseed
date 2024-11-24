"use client";

import { useForm, UseFormReturnType } from "@mantine/form";
import { TextInput, Button, Group, Stack, Accordion } from "@mantine/core";
import { PersonalInfo } from "../types";
import { usePersonalFormContext } from "../context/PersonalInfoContext";

function onFromSubmit(
  form: UseFormReturnType<PersonalInfo>,
  setFormData: React.Dispatch<React.SetStateAction<PersonalInfo>>
) {
  console.log(form.values);
  setFormData(form.values);
}

export function PersonalInfoForm() {
  const { formData, setFormData } = usePersonalFormContext();

  const form = useForm<PersonalInfo>({
    initialValues: formData,
  });

  return (
    <Stack>
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

export default function PersonalInfoAccordian() {
  return (
    <Accordion.Item key={"Personal Info"} value={"Personal Info"}>
      <Accordion.Control>{"Personal Info"}</Accordion.Control>
      <Accordion.Panel>
        <PersonalInfoForm />
      </Accordion.Panel>
    </Accordion.Item>
  );
}
