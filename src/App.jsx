import conf from "./config/env_config.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "./components/ui/sonner.jsx";
import Header from "./components/custom/Header.jsx";
import LandingPage from "./pages/landing-page/LandingPage.jsx";
import CreateTrip from "./pages/create-trip/index";
import ViewTrip from "./pages/view-trip/index.jsx";
import PrevTrips from "./pages/prev-trips/index.jsx";
import { ContextProvider } from "./context";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create-trip" element={<CreateTrip />} />
      <Route path="/view-trip/:tripId" element={<ViewTrip />} />
      <Route path="/prev-trips" element={<PrevTrips />} />
    </Route>
  )
);

const App = () => {
  return (
    <ContextProvider>
      <GoogleOAuthProvider clientId={conf.GOOGLE_AUTH_CLIENT_ID}>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </ContextProvider>
  );
};

export default App;
