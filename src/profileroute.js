import Profile from "layouts/profile";
// Soft UI Dashboard React icons
import { Person } from "@mui/icons-material";

const profile_route = [
    {
      type: "profile",
      name: "Profile",
      key: "profile",
      route: "/profile",
      icon: <Person size="12px" />,
      component: <Profile />,
      noCollapse: true,
    },
  ];

  export default profile_route;