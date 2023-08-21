import React from 'react'
import { useRoutes } from 'react-router-dom';
import { Home, Cart, Favorites, Error, FAQPage, Signup, Login} from './pages'

export const Routes = () => {
    const Route = [
        {
            children: [
                { path: "/", element: <Home /> },
                { path: "/signup", element: <Signup /> },
                { path: "/login", element: <Login /> },
                { path: "/cart", element: <Cart /> },
                { path: "/wishlist", element: <Favorites /> },
                // { path: "/categories/:categoryName", element: <Categories /> },
                // { path: "categories/:category/:productId", element: <ProductDetails /> },
                // { path: "/cart", element: <Cart /> },
                { path: "/faq", element: <FAQPage /> },
                { path: "/*", element: <Error /> },
            ],
        },
    ];
    return useRoutes((Route));
}