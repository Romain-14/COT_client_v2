import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Index";
import Tea from "../pages/Tea/Index";
import SingleTea from "../pages/Tea/SingleTea";
import About from "../pages/About/Index";
import Entry from "../pages/User/Index";
import Cart from "../pages/Cart/Index";
import Dashboard from "../pages/User/Dashboard";
import HOC from "../helpers/HOC/Auth";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tea" element={<Tea />} />
            <Route path="/tea/:id" element={<SingleTea />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/entry" element={<Entry />} />
            <Route path="/dashboard" element={<HOC child={Dashboard} auth={true}/>} />            
        </Routes>
    );
}

export default Router;
