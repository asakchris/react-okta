import { Routes, Route } from "react-router-dom";
import { LoginCallback } from "@okta/okta-react";
import { RequiredAuth } from "./SecureRoute";

import Home from "../pages/Home";
import Protected from "../pages/Protected";
import Loading from "./Loading";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="login/callback"
        element={<LoginCallback loadingElement={<Loading />} />}
      />
      <Route path="/protected" element={<RequiredAuth />}>
        <Route path="" element={<Protected />} />
      </Route>
      <Route path="/profile" element={<RequiredAuth />}>
        <Route path="" element={<Profile />} />
      </Route>
      <Route path="/protected" element={<RequiredAuth />}>
        <Route path="" element={<Protected />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
