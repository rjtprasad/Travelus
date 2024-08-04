import conf from "./config/env_config.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "./components/ui/sonner.jsx";
import Header from "./components/custom/Header.jsx";
import LandingPage from "./pages/LandingPage";
import CreateTrip from "./pages/CreateTripPage";
import TripDetails from "./pages/TripDetailsPage";
import AllTrips from "./pages/AllTripsPage";

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
      <Route path="/travel-details/:tripId" element={<TripDetails />} />
      <Route path="/all-trips" element={<AllTrips />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
