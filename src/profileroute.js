// Soft UI Dashboard React icons
import { Person } from "@mui/icons-material";
import Overview from "layouts/profile";

const profile_route = [
    {
      type: "profile",
      name: "Profile",
      key: "profile",
      route: "/profile",
      icon: <Person size="12px" />,
      component: <Overview />,
      noCollapse: true,
    },
  ];

  export default profile_route;