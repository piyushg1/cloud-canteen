import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "../data/store";

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return (
        <>
            <Provider store={store}>
                <NavBar />
                <Outlet />
                <Footer />
            </Provider>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    }
])

root.render(<RouterProvider router={appRouter} />)