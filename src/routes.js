import React from 'react'
import { useRoutes } from 'react-router-dom';

export const Routes = () => {
    const Route = [
        {
            children: [
                { path: "/", element: <Home /> },
                { path: "/my-orders", element: <MyOrders /> },
                { path: "/wishlist", element: <Saved /> },
                { path: "/categories/:categoryName", element: <Categories /> },
                { path: "categories/:category/:productId", element: <ProductDetails /> },
                { path: "/cart", element: <Cart /> },
                { path: "/faq", element: <FAQPage /> },
                { path: "/*", element: <NotFoundPage /> },
            ],
        },
    ];
    return useRoutes((Route));
}