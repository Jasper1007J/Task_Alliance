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

import { useEffect, useMemo, useState } from "react";

// react-router components
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// @mui material components
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import { ThemeProvider } from "@mui/material/styles";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import Configurator from "examples/Configurator";
import Sidenav from "examples/Sidenav";

// Soft UI Dashboard React themes
import theme from "assets/theme";

// RTL plugins
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

// Soft UI Dashboard React routes
import ProtectedRoutes from "protectedRoutes";
import routes from "routes";
import PrivateRoots from "./privateRoots";
// Soft UI Dashboard React contexts
import { setMiniSidenav, setOpenConfigurator, useSoftUIController } from "context";

// Images
import brand from "assets/images/logo-ct.png";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";




export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const [authToken,setAuthToken] = useState(true);

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
        
        <Route exact path={route.route} element={
        /*   <PrivateRoots> */
          route.component
         /*  </PrivateRoots> */
          } key={route.key} />
        
        )
      }

      return null;
    });

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );

  // return direction === "rtl" ? (
  //   <CacheProvider value={rtlCache}>
  //     <ThemeProvider theme={themeRTL}>
  //       <CssBaseline />
  //       {layout === "dashboard" && (
  //         <>
  //           <Sidenav
  //             color={sidenavColor}
  //             brand={brand}
  //             brandName="Soft UI Dashboard"
  //             routes={routes}
  //             onMouseEnter={handleOnMouseEnter}
  //             onMouseLeave={handleOnMouseLeave}
  //           />
  //           <Configurator />
  //           {configsButton}
  //         </>
  //       )}
  //       {layout === "vr" && <Configurator />}
  //       <Routes>
  //         {getRoutes(routes)}
  //         <Route path="*" element={<Navigate to="/dashboard" />} />
  //       </Routes>
  //     </ThemeProvider>
  //   </CacheProvider>
  // ) : (

  
    return <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Task Alliance"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            setAuthToken={setAuthToken}
            // sx={{
            //   overflow:'hidden'
            // }}
          />
          {/* <Configurator /> */}
          {/* {configsButton} */}
        </>
      )}
      {layout === "vr" && <Configurator />}
      
      <Routes>
        <Route element={<PrivateRoots authToken={authToken} />}>
          {getRoutes(routes)}
        </Route>
        <Route element={<ProtectedRoutes authToken={authToken} />}>
          <Route path="/authentication/sign-in" element={<SignIn authToken={authToken} setAuthToken={setAuthToken} />}/>
          <Route path="/authentication/sign-up" element={<SignUp authToken={authToken} setAuthToken={setAuthToken} />}/>
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  // );
}
