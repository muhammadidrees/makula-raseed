"use client";

import { isNotEmpty, useForm, UseFormReturnType } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Stack,
  Accordion,
  Select,
} from "@mantine/core";
import { PersonalInfo } from "../types";
import { usePersonalFormContext } from "../context/PersonalInfoContext";
import { AccordianControl } from "./AccordianControl";
import { notifications } from "@mantine/notifications";

function onFromSubmit(
  form: UseFormReturnType<PersonalInfo>,
  setFormData: React.Dispatch<React.SetStateAction<PersonalInfo>>
) {
  console.log(form.values);
  setFormData(form.values);
  notifications.show({
    color: "green",
    title: "Personal Info Saved",
    message: "Personal Info has been saved successfully",
  });
}

export default function PersonalInfoAccordian() {
  const { formData, setFormData } = usePersonalFormContext();

  const form = useForm<PersonalInfo>({
    initialValues: formData,
    validate: {
      name: isNotEmpty("Name is required"),
      email: isNotEmpty("Email is required"),
      taxID: isNotEmpty("Tax ID is required"),
      address: {
        street: isNotEmpty("Street is required"),
        city: isNotEmpty("City is required"),
        zip: isNotEmpty("Zip is required"),
      },
    },
  });

  const isSaveDisabled =
    JSON.stringify(form.values) === JSON.stringify(formData);

  const isFormEmpty =
    formData.name === "" ||
    formData.email === "" ||
    formData.taxID === "" ||
    formData.address.street === "" ||
    formData.address.city === "" ||
    formData.address.zip === "";

  return (
    <Accordion.Item key={"Personal Info"} value={"Personal Info"}>
      <AccordianControl
        label={"Personal Info"}
        isFormEmpty={isFormEmpty}
        isFormUnsaved={!isSaveDisabled}
      />

      <Accordion.Panel>
        <form onSubmit={form.onSubmit(() => onFromSubmit(form, setFormData))}>
          <Stack>
            <TextInput
              label="Name"
              placeholder="Name"
              withAsterisk
              key={form.key("name")}
              {...form.getInputProps("name")}
            />
            <TextInput
              mt="md"
              label="Email"
              placeholder="Email"
              withAsterisk
              key={form.key("email")}
              {...form.getInputProps("email")}
            />

            <TextInput
              mt="md"
              label="Tax ID"
              placeholder="Your CNIC or Tax ID"
              withAsterisk
              key={form.key("taxID")}
              {...form.getInputProps("taxID")}
            />

            <TextInput
              mt="md"
              label="Address"
              placeholder="Address"
              withAsterisk
              key={form.key("address.street")}
              {...form.getInputProps("address.street")}
            />

            <Group grow>
              <Select
                mt="md"
                label="City"
                placeholder="City"
                withAsterisk
                key={form.key("address.city")}
                data={["Karachi", "Lahore"]}
                searchable
                {...form.getInputProps("address.city")}
              />
              <TextInput
                mt="md"
                label="Zip"
                placeholder="Zip"
                withAsterisk
                key={form.key("address.zip")}
                {...form.getInputProps("address.zip")}
              />
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
