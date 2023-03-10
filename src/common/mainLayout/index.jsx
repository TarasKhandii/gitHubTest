import React from "react";
import Header from "../header";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
