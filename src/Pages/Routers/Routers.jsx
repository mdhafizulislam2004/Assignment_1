import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AppsDitels from "../AppsDitels/AppsDitels";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllApps from "../AllApps/AllApps";
import AppsError from "../AppsError/AppsError";
import Installed from "../Installed/Installed";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            loader:()=>fetch("/Apps.json"),
            Component:Home
        },
        {
          path:"/appsditels/:id",
          loader:()=>fetch("/Apps.json"),
          Component:AppsDitels
        },
        {
          path:"/allapps",
          loader:()=>fetch("/Apps.json"),
          Component:AllApps
        },
        {
          path:"/appnotfound",
          Component: AppsError
        },
        {
          path:"installedapp",
          Component:Installed
        }
      ]
    },
    {
      path:"*",
      Component:ErrorPage
    },
]);