import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

import ProtectedRoute from "./pages/ProtectedRoute";
import Countries from "./ui/Countries";
import CityItem from "./ui/CityItem";
import AppLayout from "./pages/AppLayout";
import LayOut from "./pages/LayOut";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Form from "./ui/Form";
import Cities from "./ui/Cities";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
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
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 4000,
              },
              style: {
                fontSize: "1.6rem",
                maxWidth: "50rem",
                padding: ".6rem 1.2rem",
                backgroundColor: "#00c46a",
                color: "#fff",
              },
            }}
          />
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
