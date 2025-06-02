import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Provider } from "react-redux";
import "./Container/App.css";
import "/index.css";
import Container from "./Container/Container.jsx";
import Error from "./Container/Error.jsx";
import About from "./Links/About.jsx";
import Contact from "./Links/Contact.jsx";
import LoginComponent from "./Links/LoginComponent.jsx";
import Menu from "./Container/Menu.jsx";
import Shimmer from "./Container/Shimmer.jsx";
import { UserProvider } from "./Links/UserContext"; // Changed from userContext to UserContext
import Signincomponent from "./Links/SigninComponent.jsx";
import appStore from "./Links/AppStore.jsx";
import Cart from "./Container/Cart.jsx";
import Footer from "./Container/Footer.jsx";
import Checkout from "./Container/Checkout.jsx";


const Grocery = lazy(() => import("./Container/Grocery.jsx"));

function App() {
  return (
    <Provider store={appStore}>
      <UserProvider>
        <Outlet />
        <Footer />
      </UserProvider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Container />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/ContactS",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Login",
        element: <LoginComponent />,
      },
      {
        path: "/Signup",
        element: <Signincomponent />,
      },
      {
        path: "/Restaurants-Menu/:resId",
        element: <Menu />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default function Root() {
  return <RouterProvider router={appRouter} />;
}