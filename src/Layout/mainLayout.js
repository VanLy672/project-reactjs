import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Filter from "../Components/Header/Filter"
import Header from "../Components/Header/Header"

const MainLayout = () => {
    return(
        <div>
            <Header/>
            {/* <Filter/>
            <Outlet/>
            <Footer/> */}
        </div>
    )
}

export default MainLayout;