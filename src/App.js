import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./common/mainLayout";
import MainPage from "./pages/mainPage";
import UserDetails from "./pages/userDetails";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/info/:id" element={<UserDetails />} />
        </Routes>
      </MainLayout>
    </Provider>
  );
}

export default App;
