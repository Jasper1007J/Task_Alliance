/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React components

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Billing page components
import Basic from "./components/components/Routes/Basic/Basic";

function Boards() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
      <Basic/>
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Boards;
