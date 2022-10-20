import { createBrowserRouter } from "react-router-dom";
import { dataLoader } from "../../loaders/loaders";
import Main from "../Main/Main";
import Orders from "../Orders/Orders";
import Shop from "../Shop/Shop";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Shop />,
                loader: () => fetch('localShoes.json')
            },
            {
                path: '/shop',
                element: <Shop />,
                loader: () => fetch('localShoes.json')
            },
            {
                path: '/orders',
                element: <Orders />,
                loader: dataLoader
            },
        ]
    }
]);