import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/curved-6.jpg";

function SignIn(props) {
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const navigate = useNavigate();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordPattern = /^.{8,}$/;
  const [hasClickedSignIn, setHasClickedSignIn] = useState(false); 
  useEffect(() => {
    setIsEmailError(!emailPattern.test(email));
    setIsPasswordError(!passwordPattern.test(password));
  }, [email, password]);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSignInClick = () => {
    setHasClickedSignIn(true);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    console.log("Email Error:", isEmailError);
    console.log("Password Error:", isPasswordError);
    if (!isEmailError && !isPasswordError) {
      props.setAuthToken(true)
      navigate("/dashboard");
    }
  };


  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="p" fontWeight="bold">
              Email<span style={{ color: "red" }}>*</span>
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="email"
            placeholder="Email"
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isEmailError && hasClickedSignIn && !email=="" && (
            <SoftTypography style={{ display: hasClickedSignIn && isEmailError && email !== "" ? "block" : "none", position: 'absolute',marginTop: '0.5vw'}}
              component="label"
              variant="caption"
              fontWeight="bold"
              color="error"
            >
              Email is invalid
            </SoftTypography>
          )}
          {email=="" && hasClickedSignIn && (
        

            <SoftTypography style={{ display: hasClickedSignIn && email === ""? "block" : "none", position: 'absolute',marginTop: '0.5vw'}}
              component="label"
              variant="caption"
              fontWeight="bold"
              color="error"
            >
              Email is Empty
            </SoftTypography>
          )}
        
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="p" fontWeight="bold" >
              Password<span style={{ color: "red" }}>*</span>
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="password"
            placeholder="Password"
            required
            pattern=".{8,}"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
          {isPasswordError && hasClickedSignIn && !password=="" &&(
         
            <SoftTypography style={{ display: hasClickedSignIn && isPasswordError && password !== "" ? "block" : "none", position: 'absolute',marginTop: '0.5vw'}}
              component="label"
              variant="caption"
              fontWeight="bold"
              color="error"
            >
              Password is invalid
            </SoftTypography>
          )}
          {password=="" && hasClickedSignIn &&(
          
            <SoftTypography style={{ display: hasClickedSignIn && password === ""? "block" : "none", position: 'absolute',marginTop: '0.5vw'}}
              component="label"
              variant="caption"
              fontWeight="bold"
              color="error"
            >
              Password is Empty
            </SoftTypography>
          )}
        </SoftBox>

        
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton
            variant="gradient"
            color="info"
            fullWidth
            onClick={handleSignInClick}
          >
            Sign In
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;