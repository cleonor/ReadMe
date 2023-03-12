import ReactDOM from 'react-dom';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'
import "./index.css";
import Navbar from "./components/navBar";
import MainPage from './components/mainPage';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";



const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <>
                <Navbar />
                <MainPage />
            </>,
        },
        {
            path: "/login",
            element: <div>Test!</div>,
        },
    ]);



    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));