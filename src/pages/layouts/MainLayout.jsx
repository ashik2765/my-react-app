import NavBar from "../home/NavBar";
import Footer from "../home/Footer";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
