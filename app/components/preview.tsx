"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

import dynamic from "next/dynamic";
import { useCompanyFormContext } from "../context/CompanyInfoContext";
import { usePersonalFormContext } from "../context/PersonalInfoContext";
import { BankInfo, CompanyInfo, InvoiceData, PersonalInfo } from "../types";
import { useInvoiceDataContext } from "../context/InvoiceDataContext";
import { useEffect, useState } from "react";
import { useBankFormContext } from "../context/BankInfoContext";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  column: {
    flex: 1,
    marginRight: 10, // Add spacing between columns
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  invoiceNumber: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: "bold",
  },
  invoiceDetails: {
    textAlign: "right",
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    marginBottom: 4,
  },
  address: {
    marginBottom: 4,
    width: "80%", // Set a fixed width
    wordWrap: "break-word", // Allow text to wrap within the fixed width
  },
  table: {
    width: "100%",
    marginVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000000",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  tableCell: {
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
  tableCellDescription: {
    flex: 3,
    padding: 5,
    textAlign: "left",
  },
  totalRow: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    borderTopWidth: 1,
    borderColor: "#000000",
  },
  totalCellLabel: {
    flex: 1,
    padding: 5,
    fontWeight: "bold",
    textAlign: "right",
  },
  totalCellValue: {
    flex: 1,
    padding: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  paymentDetails: {
    position: "absolute",
    bottom: 80, // Adjust this value as needed to position above footer
    left: 40,
    right: 40,
    borderBottom: 1,
    borderColor: "#000",
    paddingBottom: 10,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 40,
    textAlign: "center",
    fontSize: 10,
    color: "#666666",
  },
});

function MyDocument({
  companyFormData,
  personalFormData,
  invoiceFromData,
  bankFormData,
}: {
  companyFormData: CompanyInfo;
  personalFormData: PersonalInfo;
  invoiceFromData: InvoiceData;
  bankFormData: BankInfo;
}) {
  // Helper function to format dates
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Calculate invoice number based on month/year
  const generateInvoiceNumber = (date: Date) => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2); // Last two digits of the year
    return `001${month}${year}`;
  };

  // Generate the invoice period
  const generateInvoicePeriod = (date: Date) => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return `${formatDate(startOfMonth)} - ${formatDate(endOfMonth)}`;
  };

  // Calculate Subtotal and Total
  const subtotal = invoiceFromData.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxRate = 0; // Update as necessary
  const tax = subtotal * (taxRate / 100);
  const total = (subtotal + tax) * 1.0;

  return (
    <Document title="Invoice">
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>INVOICE</Text>
            <Text style={styles.invoiceNumber}>
              #{generateInvoiceNumber(invoiceFromData.date)}
            </Text>
          </View>
          <View style={styles.invoiceDetails}>
            <Text>Issued: {formatDate(invoiceFromData.date)}</Text>
            <Text>
              Due:{" "}
              {formatDate(
                new Date(invoiceFromData.date.getTime() + 14 * 86400000)
              )}
            </Text>
            <Text>Period: {generateInvoicePeriod(invoiceFromData.date)}</Text>
          </View>
        </View>

        {/* Billed To and From in a Row */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.title}>Billed To:</Text>
            <Text style={styles.text}>{companyFormData.name}</Text>
            <Text style={styles.address}>{companyFormData.address.street}</Text>
            <Text style={styles.text}>
              {companyFormData.address.city}. {companyFormData.address.zip}
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>From:</Text>
            <Text style={styles.text}>{personalFormData.name}</Text>
            <Text style={styles.text}>Tax# {personalFormData.taxID}</Text>
            <Text style={styles.text}>{personalFormData.email}</Text>
            <Text style={styles.address}>
              {personalFormData.address.street}
            </Text>
            <Text style={styles.text}>
              {personalFormData.address.city}, {personalFormData.address.zip}
            </Text>
          </View>
        </View>

        {/* Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={styles.tableCellDescription}>Description</Text>
            <Text style={styles.tableCell}>Rate (€)</Text>
            <Text style={styles.tableCell}>Qty</Text>
            <Text style={styles.tableCell}>Line Total (€)</Text>
          </View>

          {/* Table Rows */}
          {invoiceFromData.items.map((item) => (
            <View key={item.key} style={styles.tableRow}>
              <Text style={styles.tableCellDescription}>
                {item.description}
              </Text>
              <Text style={styles.tableCell}>{item.price.toFixed(2)}</Text>
              <Text style={styles.tableCell}>{item.quantity}</Text>
              <Text style={styles.tableCell}>
                {(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
          ))}

          {/* Subtotal and Total Rows */}
          <View style={styles.totalRow}>
            <Text style={styles.tableCellDescription}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.totalCellLabel}>Subtotal</Text>
            <Text style={styles.totalCellValue}>{subtotal.toFixed(2)} €</Text>
          </View>
          {taxRate > 0 && (
            <View style={styles.totalRow}>
              <Text style={styles.tableCellDescription}></Text>
              <Text style={styles.tableCell}></Text>
              <Text style={styles.totalCellLabel}>Tax ({taxRate}%)</Text>
              <Text style={styles.totalCellValue}>{tax.toFixed(2)} €</Text>
            </View>
          )}
          <View style={styles.totalRow}>
            <Text style={styles.tableCellDescription}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.totalCellLabel}>Total</Text>
            <Text style={styles.totalCellValue}>{total.toFixed(2)} €</Text>
          </View>
        </View>

        {/* Payment Details at the Bottom */}
        <View style={styles.paymentDetails}>
          <Text style={styles.title}>Payment Details:</Text>
          <Text style={styles.text}>
            Account Holder: {bankFormData.accountTitle}
          </Text>
          <Text style={styles.text}>Bank Name: {bankFormData.name}</Text>
          <Text style={styles.text}>IBAN: {bankFormData.iban}</Text>
          <Text style={styles.text}>BIC: {bankFormData.bic}</Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Amount due: {total.toFixed(2)} €{"\n"}
          Thank you for your business! Payment is due upon receipt of this
          invoice.
        </Text>
      </Page>
    </Document>
  );
}

export function PdfView() {
  const { companyFormData } = useCompanyFormContext();
  const { personalFormData } = usePersonalFormContext();
  const { invoiceFromData } = useInvoiceDataContext();
  const { bankFromData } = useBankFormContext();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, [invoiceFromData]);

  if (!isReady) {
    return <div>Loading PDF...</div>;
  }

  return (
    <div style={{ height: "90vh", display: "flex", flexDirection: "column" }}>
      <PDFViewer style={{ flex: 1 }}>
        <MyDocument
          personalFormData={personalFormData}
          companyFormData={companyFormData}
          invoiceFromData={invoiceFromData}
          bankFormData={bankFromData}
        />
      </PDFViewer>
    </div>
  );
}

export default function Preview() {
  return <PdfView />;
}
