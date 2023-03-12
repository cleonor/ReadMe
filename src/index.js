import ReactDOM from 'react-dom';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'
import "./index.css";
import Navbar from "./components/navBar";
import MainPage from './components/mainPage';
import LogIn from './components/logIn';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <> <Navbar />
                <MainPage />
            </>
            ,
        },
        {
            path: "/login",
            element: <LogIn />,
        },
    ]);



    return (
        <>
            <CookiesProvider>
                <RouterProvider router={router} />
            </CookiesProvider>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));