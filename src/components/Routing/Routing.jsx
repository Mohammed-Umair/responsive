import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComponentsPage } from "../Pages/Component/ComponentsPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { FormsPage } from "../Pages/Forms/FormsPage";
import { Tables } from "../Pages/Tables/Tables";
import { Maps } from "../Pages/Maps/Maps";
import { Charts } from "../Pages/Charts/Charts";
import { Calendar } from "../Pages/Calendar/Calendar";
import { Pages } from "../Pages/pageC/Pages";
import { Buttons } from "../Pages/Component/Buttons";
import { GridSystem } from "../Pages/Component/GridSystem";
import { Panels } from "../Pages/Component/Panels";
import { SweetAlert } from "../Pages/Component/SweetAlert";
import { Notification } from "../Pages/Component/Notification";
import { Icons } from "../Pages/Component/Icons";
import { Typography } from "../Pages/Component/Typography";
import { RegularForm } from "../Pages/Forms/RegularForm";
import { ExtendedForms } from "../Pages/Forms/ExtendedForms";
import { ValidationForm } from "../Pages/Forms/ValidationForm";
import { WizardForm } from "../Pages/Forms/WizardForm";
import { RegularTable } from "../Pages/Tables/RegularTable";
import { ExtendedTable } from "../Pages/Tables/ExtendedTable";
import { ReactTables } from "../Pages/Tables/ReactTables";
import { GoogleMaps } from "../Pages/Maps/GoogleMaps";
import { FullScreenMaps } from "../Pages/Maps/FullScreenMaps";
import { VectorMap } from "../Pages/Maps/VectorMap";
import { UserPage } from "../Pages/pageC/UserPage";
import { LoginPage } from "../Pages/pageC/LoginPage";
import { RegisterPage } from "../Pages/pageC/RegisterPage";
import { LockScreenPage } from "../Pages/pageC/LockScreenPage";

const subRoute = [
  {
    component: <Buttons />,
    path: "button",
  },
  {
    component: <GridSystem />,
    path: "gridSystem",
  },
  {
    component: <Panels />,
    path: "panels",
  },
  {
    component: <SweetAlert />,
    path: "sweetAlert",
  },
  {
    component: <Notification />,
    path: "notification",
  },
  {
    component: <Icons />,
    path: "icons",
  },
  {
    component: <Typography />,
    path: "typography",
  },
  {
    component: <RegularForm />,
    path: "regularForms",
  },
  {
    component: <ExtendedForms />,
    path: "extendedForms",
  },
  {
    component: <ValidationForm />,
    path: "validationForms",
  },
  {
    component: <WizardForm />,
    path: "wizardForm",
  },
  {
    component: <RegularTable />,
    path: "regularTable",
  },
  {
    component: <ExtendedTable />,
    path: "extendedTable",
  },
  {
    component: <ReactTables />,
    path: "reactTable",
  },
  {
    component: <GoogleMaps />,
    path: "googleMap",
  },
  {
    component: <FullScreenMaps />,
    path: "fullScreenMap",
  },
  {
    component: <VectorMap />,
    path: "vectorMap",
  },
  {
    component: <UserPage />,
    path: "userPage",
  },
  {
    component: <LoginPage />,
    path: "loginPage",
  },
  {
    component: <RegisterPage />,
    path: "registerPage",
  },
  {
    component: <LockScreenPage />,
    path: "lockScreenPage",
  },
];

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/componentsPages" element={<ComponentsPage />} />

        {subRoute.map((elem) => {
          return (
            <Route
              key={elem.path}
              exact
              path={elem.path}
              element={elem.component}
            />
          );
        })}

        <Route path="/formPage" element={<FormsPage />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </>
  );
};
