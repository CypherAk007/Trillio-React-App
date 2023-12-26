import { Outlet } from "react-router-dom";
import Header from "./Header";
import classes from './Header.module.scss';
import HotelView from "./HotelView";
import SideBar from "./SideBar";
const RouteLayout = ()=>{
    return(
        <div className={`${classes['container']} -bg--color-grey-light-2 max-w-[120rem] my-[8rem] mx-auto min-h-[50rem] shadow-dark  tab-port:my-0`}>
            <Header></Header>
            <div className={` ${classes.content} flex tab-port:flex-col`}>
                <SideBar></SideBar>
                <HotelView>
                {/* <div> */}
                    <Outlet></Outlet>
                {/* </div> */}
                </HotelView>
            </div>
        </div>
    )
}
export default RouteLayout;