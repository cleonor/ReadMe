import ReactDOM from 'react-dom';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'
import "./index.css";
import Navbar from "./components/navBar";
import MainPage from './components/mainPage';



const App = () => {


    return (
        <>
            <Navbar />
            <MainPage />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));