import classes from "./Header.module.scss"
import logo from "../assets/img/favicon.png"
import { useHref } from "react-router-dom";
import mag from "../assets/img/SVG/magnifying-glass.svg";
import chat from "../assets/img/SVG/chat.svg";
import Bookmark from "../assets/img/SVG/bookmark.svg";
import user from "../assets/img/user.jpg"
const Header = ()=>{
    return(
        <div className={` flex justify-between items-center my-8`}>
            <div className={`pl-4`}>
                <img className={`h-16`} src={logo}></img>
            </div>
            <form className={`flex items-center relative `}>
                <input className={`-bg--color-grey-dark-3/25 place-content-start  w-[95%] self-center py-3 px-40 rounded-2xl focus:w-[100%] transition-all `} placeholder="Search Hotels" type="text"></input>
                <div>
                    <img className={`absolute top-[20%] left-[85%] focus:left-[90%] `} src={mag}></img>
                </div>
            </form>
            <div className={`flex gap-4 mr-4 items-center self-stretch hover:bg-yellow-400`}>
                <div className={`min-h-full`}>
                    <img src={Bookmark}></img>
                </div>
                <div className={`min-h-full`}>
                    <img src={chat} alt="chat" />
                </div>
                <div className={`ml-4 flex items-center gap-4 min-h-full hover:bg-pink-500`}>
                    <img className={`h-16 rounded-full`} src={user}></img>
                    <div className={`text-xl`}>Jonas</div>
                </div>
            </div>
        </div>
    )
}

export default Header;