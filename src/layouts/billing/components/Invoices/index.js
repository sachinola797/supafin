/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card id="delete-account">
      <SuiBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SuiTypography variant="h6" fontWeight="medium">
          Invoices
        </SuiTypography>
        <SuiButton variant="outlined" buttonColor="info" size="small">
          view all
        </SuiButton>
      </SuiBox>
      <SuiBox p={2}>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="June, 06, 2022" id="#MS-415646" price="$180000" />
          <Invoice date="June, 05, 2022" id="#MS-415645" price="$364000" />
          <Invoice date="June, 07, 2022" id="#MS-415644" price="$5000000" />
          <Invoice date="June, 01, 2022" id="#MS-415643" price="$10000000" />
          <Invoice date="May, 25, 2022" id="#MS-415642" price="$287500" />
          <Invoice date="May, 21, 2022" id="#MS-415641" price="$1987500" />
          <Invoice date="May, 10, 2022" id="#MS-415640" price="$9989990" />
          <Invoice date="April, 25, 2022" id="#QW-103578" price="$120000" />
          <Invoice date="April, 10, 2022" id="#MS-415639" price="$199990" />
          <Invoice date="April, 05, 2022" id="#QW-103576" price="$1250000" />
          <Invoice date="March, 01, 2022" id="#MS-415646" price="$100000" />
          <Invoice date="February, 10, 2022" id="#RV-126749" price="$250000" />
          <Invoice date="Jan, 31, 2022" id="#AR-803481" price="$300000" noGutter />
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default Invoices;
