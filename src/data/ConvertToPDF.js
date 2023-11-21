import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

// Component representing the PDF document
const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>My Homepage</Text>
        {/* Add your homepage content here */}
      </View>
    </Page>
  </Document>
);

const HomepageToPDF = () => {
  return (
    <div>
        
      {/* Add your homepage content here */}
      <PDFDownloadLink document={<PDFDocument />} fileName="homepage.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Generating PDF...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default HomepageToPDF;