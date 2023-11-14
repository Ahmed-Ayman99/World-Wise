import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

import ProtectedRoute from "./pages/ProtectedRoute";
import ToasterItem from "./ui/ToasterItem";
import AppLayout from "./pages/AppLayout";
import Countries from "./ui/Countries";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import CityItem from "./ui/CityItem";
import LayOut from "./pages/LayOut";
import Login from "./pages/Login";
import Cities from "./ui/Cities";
import Home from "./pages/Home";
import Form from "./ui/Form";

const App = () => {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route index element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/product" element={<Product />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities/:id" element={<CityItem />} />
              <Route path="cities" element={<Cities />} />
              <Route path="countries" element={<Countries />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
          <ToasterItem />
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
};

export default App;
