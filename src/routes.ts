import Login from "./pages/login/login.page";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login
  })
);

export default Routes;
