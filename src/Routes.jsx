import App from './App'
import PageNotFound from './Pages/PageNotFound.jsx'
import Shop from './Pages/ShopPage.jsx';
import Home from './Pages/HomePage.jsx';
import Cart from './Pages/CartPage.jsx';
import ItemCards from './Components/ItemCards.jsx'
import CheckOutPage from "./Pages/CheckOutPage";
const routes = [
    {path:'/' ,
        element:<App/>,
        errorElement:<PageNotFound/>,
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