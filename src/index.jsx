import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const BAHT = "\u0E3F";

const formatter = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "BHT",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <h1>Unicode</h1>
        <Text>0 {BAHT}</Text>
      </View>
      <View style={styles.section}>
        <h1>Intl NumberFormat</h1>
        <Text>{formatter.format(0)}</Text>
      </View>
    </Page>
  </Document>
);

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
