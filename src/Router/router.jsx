import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import Loginpage from "../Component/Loginpage";
import RegisterPage from "../Component/RegisterPage";
import HomePages from "../Pages/HomePages";
import AllMarathons from "../Pages/AllMarathons";
import ErrorPage from "../Component/ErrorPage";
import Private from "./Private";
import AddMarathon from "../Pages/AddMarathon";
import Dashboard from "../Pages/Dashbroad";
import MyMarathon from "../Pages/MyMarathon";
import ApplyList from "../Pages/ApplyList";
import Dashbroadimg from "../Component/Dashbroadimg";
import MarathonDetails from "../Component/MarathonDetails";
import MarathonRegistration from "../Component/MarathonRegistration";
import About from "../Component/About";
import ContactUs from "../Component/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <HomePages></HomePages>,
      },
      {
        path: "/marathons",
        element: (
          <Private>
            <AllMarathons></AllMarathons>
          </Private>
        ),
      },
      {
        path: `/marathon/:id`,
        element: (
          <Private>
            <MarathonDetails></MarathonDetails>
          </Private>
        ),
      },
      {
        path: "/register/:id",
        element: (
          <Private>
            <MarathonRegistration></MarathonRegistration>
          </Private>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Private>
        <Dashboard></Dashboard>
      </Private>
    ),
    children: [
      {
        index: true,
        element: (
          <Private>
            <Dashbroadimg></Dashbroadimg>
          </Private>
        ),
      },
      {
        path: "/dashboard/addMarathon",
        element: (
          <Private>
            <AddMarathon />
          </Private>
        ),
      },
      {
        path: "/dashboard/my-marathon",
        element: (
          <Private>
            <MyMarathon></MyMarathon>
          </Private>
        ),
      },
      {
        path: "/dashboard/my-apply-list",
        element: (
          <Private>
            <ApplyList></ApplyList>
          </Private>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Loginpage></Loginpage>,
  },
  {
    path: "/reg",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
