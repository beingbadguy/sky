import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainContext from "./Store/StoreContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import CategoryPage from "./Pages/CategoryPage.jsx";
import FAQPage from "./Pages/FAQPage.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/Contact.jsx";
import FilterPage from "./Pages/FilterPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import User from "./Pages/UserPage.jsx";
import UserPage from "./Pages/UserPage.jsx";

// Create a QueryClient instance
const queryClient = new QueryClient();

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/filter", element: <FilterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/categories", element: <CategoryPage /> },
      { path: "/faq", element: <FAQPage /> },
      {
        path: "/user",
        element: <UserPage />,
      },
      // Add NotFound route if required
      // { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

// Render the root of your app
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* MainContext should be inside QueryClientProvider */}
    <MainContext>
      <RouterProvider router={router} />
    </MainContext>
  </QueryClientProvider>
);
