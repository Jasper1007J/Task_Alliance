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

import { useEffect, useState } from "react";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Separator from "layouts/authentication/components/Separator";
import Socials from "layouts/authentication/components/Socials";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignUp(props) {
  const [agreement, setAgremment] = useState(true);
  const navigate = useNavigate();
  const handleSetAgremment = () => setAgremment(!agreement);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [hasClickedSignIn, setHasClickedSignIn] = useState(false); 

  // const navigate = useNavigate();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordPattern = /^.{8,}$/;
  useEffect(() => {
    setIsEmailError(!emailPattern.test(email));
    setIsPasswordError(!passwordPattern.test(password));
  }, [email, password]);


  const handleSignInClick = () => {
    setHasClickedSignIn(true);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Email Error:", isEmailError);
    console.log("Password Error:", isPasswordError);
    if (!isEmailError && !isPasswordError) {
      props.setAuthToken(true)
      navigate("/dashboard");
    }
  };
  return (
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator />
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput placeholder="Name" />
            </SoftBox>
            <SoftBox mb={2}>

              <SoftInput
               type="email" 
               placeholder="Email"
               required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            </SoftBox>

            <SoftBox mb={2}>

              <SoftInput type="password"
               placeholder="Password"
               required
            pattern=".{8,}"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth onClick={handleSignInClick}>
                sign up
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
