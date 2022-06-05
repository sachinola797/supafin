/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
// import Link from "@mui/material/Link";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React base styles
// import typography from "assets/theme/base/typography";

// Custom styles for the Footer
// import styles from "examples/Footer/styles";

function Footer() {
  // const { href, name } = company;
  // const { size } = typography;
  // const classes = styles();

  // const renderLinks = () =>
  //   links.map((link) => (
  //     <SuiBox key={link.name} component="li" px={2}>
  //       <Link href={link.href} target="_blank">
  //         <SuiTypography variant="button" fontWeight="regular" textColor="text">
  //           {link.name}
  //         </SuiTypography>
  //       </Link>
  //     </SuiBox>
  //   ));

  return (
    <SuiBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    />
  );
}

// Setting default values for the props of Footer
Footer.defaultProps = {
  company: { href: "https://bit.ly/3fKQZaL", name: "Creative Tim" },
  links: [
    { href: "https://appseed.us/product/node-js-react-soft-dashboard", name: "Product" },
    { href: "https://appseed.us/support", name: "Support" },
  ],
};

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
