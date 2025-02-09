import App from './App'
import ErrorPage from './Pages/ErrorPage.jsx'
import Shop from './Pages/ShopPage.jsx';
import About from './Pages/AboutPage.jsx';
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
            <About/>
            </>},
            {
                path:'About',
                element:<About/>,
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