import App from './App'
import ErrorPage from './Pages/ErrorPage.jsx'
import Shop from './Pages/ShopPage.jsx';
import About from './Pages/AboutPage.jsx';
import Cart from './Pages/CartPage.jsx';
import ItemCards from './Components/ItemCards.jsx'
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
                path:'about',
                element:<About/>,
            },
            {
                path:'shop',
                element:<Shop/>,
            },
            {
                path:'cart',
                element:<Cart/>,
            },
            {
                path:'cards',
                element:<ItemCards/>,
            },
        ]
    },

    
];

export default routes;