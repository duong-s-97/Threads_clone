import Message from "../pages/Message";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";

const publicRoutes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/login",
    component: LoginPage,
    exact: true,
  },
  {
    path: "/message",
    component: Message,
    exact: true,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
