'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactPDF = require('@react-pdf/renderer');
var ReactPDF__default = _interopDefault(ReactPDF);

const styles = ReactPDF.StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
const BAHT = "\u0E3F";
const formatter = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "BHT",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
const price = formatter.format(100); // Create Document Component

const MyDocument = () => /*#__PURE__*/React.createElement(ReactPDF.Document, null, /*#__PURE__*/React.createElement(ReactPDF.Page, {
  size: "A4",
  style: styles.page
}, /*#__PURE__*/React.createElement(ReactPDF.View, {
  style: styles.section
}, /*#__PURE__*/React.createElement(ReactPDF.Text, null, "0 ", BAHT)), /*#__PURE__*/React.createElement(ReactPDF.View, {
  style: styles.section
}, /*#__PURE__*/React.createElement(ReactPDF.Text, null, price))));

ReactPDF__default.render( /*#__PURE__*/React.createElement(MyDocument, null), `${__dirname}/example.pdf`);
