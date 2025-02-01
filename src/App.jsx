import { useState } from "react";

import Topheader from "./Header/header.jsx";
import NavBar from "./NavBar/nav.jsx";
import SearchModel from "./SearchModal/searchModal.jsx";
import BannerSection from "./BannerSection/BannerSection.jsx";
// import "./Components/404.scss";
import "./App.css";
import "./BannerSection/BannerSection.css";
import "./Components/DistanceAdmission.css";
import "./Components/StudentZone.css";

import DistanceAdmission from "./Components/DistanceAdmission.jsx";
import StudentZone from "./Components/StudentZone.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404Page from "./Components/404.jsx";
export default function App() {
  const [displaySearchModal, setSearchModal] = useState(false);
  // Component to handle the location and update page title
  function handleSearchClick(e) {
    console.log(e);
    setSearchModal(true);
  }
  function getingID(e) {
    console.log(e);
  }
  function handleHideModal() {
    setSearchModal(false);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar handleSearchClick={handleSearchClick} />
          <SearchModel
            handleHideModal={handleHideModal}
            isVisible={displaySearchModal}
            headleclick={getingID}
          />
          <BannerSection />
        </>
      ),
      errorElement: <Error404Page />,
    }, // Home page component
    {
      path: "/admissionDistance",
      element: (
        <>
          <NavBar handleSearchClick={handleSearchClick} />
          <SearchModel
            handleHideModal={handleHideModal}
            isVisible={displaySearchModal}
            headleclick={getingID}
          />
          <DistanceAdmission />
        </>
      ),
      errorElement: <Error404Page />,
    }, // Distance Admission page
    {
      path: "/StudentZone",
      element: (
        <>
          <NavBar handleSearchClick={handleSearchClick} />
          <SearchModel
            handleHideModal={handleHideModal}
            isVisible={displaySearchModal}
            headleclick={getingID}
          />
          <StudentZone />
        </>
      ),
      errorElement: <Error404Page />,
    }, //StudentZone Page
  ]);
  return (
    <>
      <Topheader headleclick={getingID} />
      <RouterProvider router={router} />;
    </>
  );
}
