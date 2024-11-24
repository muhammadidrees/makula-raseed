"use client";

import {} from "@mantine/form";
import { Box, Center, Accordion } from "@mantine/core";
import PersonalInfoFormAccordian from "./personal_info_form";
import BankInfoFormAccordian from "./bank_info_form";
import CompanyInfoAccordion from "./company_info_form";

export default function InvoiceForm() {
  return (
    <Center h="100%">
      <Box w={"80vw"}>
        <Accordion variant="separated">
          <PersonalInfoFormAccordian />
          <BankInfoFormAccordian />
          <CompanyInfoAccordion />
        </Accordion>
      </Box>
    </Center>
  );
}
