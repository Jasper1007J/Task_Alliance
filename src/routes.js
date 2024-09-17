

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";

// Soft UI Dashboard React icons
import { People, Person, SpaceDashboard, Workspaces } from "@mui/icons-material";
import Boards from "layouts/boards";
import Overview from "layouts/profile";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <SpaceDashboard size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  

  {
    type: "collapse",
    name: "Employees",
    key: "tables",
    route: "/tables",
    icon: <People size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    type: "spaces",
    name: "Spaces",
    key: "boards",
    route: "/boards",
    icon: <Workspaces size="12px" />,
    component: <Boards />,
    noCollapse: true,
  },
  {
    type: "profile",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <Person size="12px" />,
    component: <Overview />,
    noCollapse: true,
  },
  // { type: "title", title: "Account Pages", key: "account-pages" },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   route: "/authentication/sign-in",
  //   icon: <Document size="12px" />,
  //   component: <SignIn />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "/authentication/sign-up",
  //   icon: <SpaceShip size="12px" />,
  //   component: <SignUp />,
  //   noCollapse: true,
  // },
];



export default routes;
