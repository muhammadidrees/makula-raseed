"use client";

import {} from "@mantine/form";
import { Box, Accordion } from "@mantine/core";
import PersonalInfoFormAccordian from "./personal_info_form";
import BankInfoFormAccordian from "./bank_info_form";
import CompanyInfoAccordion from "./company_info_form";
import InvoiceDataInfoForm from "./invoice_data_form";

export default function InvoiceForm() {
  return (
    <Box>
      <Accordion variant="separated">
        <InvoiceDataInfoForm />
        <PersonalInfoFormAccordian />
        <BankInfoFormAccordian />
        <CompanyInfoAccordion />
      </Accordion>
    </Box>
  );
}
