import { Title } from "@mantine/core";
import { useFormContext } from "../context/FormContext";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import { Stack } from "@mantine/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { PersonalInfo } from "../types";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

function MyDocument({ formData }: { formData: PersonalInfo }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Name: {formData.name}</Text>
          <Text>Email: {formData.email}</Text>
          <Text>Tax ID: {formData.taxID}</Text>
          <Text>Address: {formData.address.street}</Text>
          <Text>City: {formData.address.city}</Text>
          <Text>ZIP: {formData.address.zip}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default function Preview() {
  const { formData } = useFormContext();

  return (
    <Stack>
      <Title order={3}>Preview</Title>

      <div style={{ height: "80vh", display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}>
          <PDFViewer style={{ width: "100%", height: "100%" }}>
            <MyDocument formData={formData} />
          </PDFViewer>
        </div>
        <PDFDownloadLink
          document={<MyDocument formData={formData} />}
          fileName="preview.pdf"
        ></PDFDownloadLink>
      </div>
    </Stack>
  );
}
