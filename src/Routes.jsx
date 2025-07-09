import App from './App'
import ErrorPage from './Pages/ErrorPage.jsx'
import Shop from './Pages/ShopPage.jsx';
import Home from './Pages/HomePage.jsx';
import Cart from './Pages/CartPage.jsx';
import ItemCards from './Components/ItemCards.jsx'
import CheckOutPage from "./Pages/CheckOutPage";
const routes = [
    {path:'/' ,
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {index: true, element: 
            <>
            <Home/>
            </>},
            {
                path:'Home',
                element:<Home/>,
            },
            {
                path:'Shop',
                element:<Shop/>,
            },
            {
                path:'Cart',
                element:<Cart/>,
            },
            {
                path:'Cards',
                element:<ItemCards/>,
            },
            {
                path:'Checkoutpage',
                element:<CheckOutPage/>,
            },
        ]
    },

    
];

export default routes;