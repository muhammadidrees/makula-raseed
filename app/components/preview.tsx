import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

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
  logo: {
    fontSize: 20,
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

function MyDocument() {
  return (
    <Document title="Invoice">
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Panda, Inc</Text>
          <View style={styles.invoiceDetails}>
            <Text>Invoice #AB2324-01</Text>
            <Text>Issued: 01 Aug, 2023</Text>
            <Text>Due: 15 Aug, 2023</Text>
          </View>
        </View>

        {/* Billed To and From */}
        <View style={styles.section}>
          <Text style={styles.title}>Billed To:</Text>
          <Text style={styles.text}>Company Name</Text>
          <Text style={styles.text}>Company Address</Text>
          <Text style={styles.text}>City, Country - 00000</Text>
          <Text style={styles.text}>+0 (000) 123-4567</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>From:</Text>
          <Text style={styles.text}>Panda, Inc</Text>
          <Text style={styles.text}>Business Address</Text>
          <Text style={styles.text}>City, State, IN - 000 000</Text>
          <Text style={styles.text}>TAX ID: 00XXXXX1234X0XX</Text>
          <Text style={styles.text}>Digital Product Designer</Text>
          <Text style={styles.text}>+91 00000 00000</Text>
          <Text style={styles.text}>hello@email.com</Text>
        </View>

        {/* Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCellDescription}>Description</Text>
            <Text style={styles.tableCell}>Rate</Text>
            <Text style={styles.tableCell}>Qty</Text>
            <Text style={styles.tableCell}>Line Total</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellDescription}>Service Name</Text>
            <Text style={styles.tableCell}>$100.00</Text>
            <Text style={styles.tableCell}>2</Text>
            <Text style={styles.tableCell}>$200.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellDescription}>Service Name</Text>
            <Text style={styles.tableCell}>$100.00</Text>
            <Text style={styles.tableCell}>2</Text>
            <Text style={styles.tableCell}>$200.00</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.tableCellDescription}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.totalCellLabel}>Subtotal</Text>
            <Text style={styles.totalCellValue}>$400.00</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.tableCellDescription}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.totalCellLabel}>Total</Text>
            <Text style={styles.totalCellValue}>$400.00</Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Amount due: US$ 400.00{"\n"}
          Thank you for your business! Payment is due upon receipt of this
          invoice.
        </Text>
      </Page>
    </Document>
  );
}

export default function Preview() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <PDFViewer style={{ flex: 1 }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}
