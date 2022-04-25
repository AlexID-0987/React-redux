import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Body1 from "./Components/Body1/Body1";
import Body2 from "./Components/Body2/Body2";
import {Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <div className='run'>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Body state={props.state._mystate.Peoples}/>}/>
                <Route path='/Body' element={<Body state={props.state._mystate.Peoples}/>}/>
                <Route path='/Body1' element={<Body1 state={props.state._mystate.Messages}/>}/>
                <Route path='/Body2' element={<Body2 state={props.state._mystate.News}/>}/>
            </Routes>
            <Footer/>
        </div>
  );
}

export default App;
