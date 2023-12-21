import classes from "./Header.module.scss"
import logo from "../assets/img/favicon.png"
import { useHref } from "react-router-dom";
import mag from "../../public/SVG/magnifying-glass.svg";
import chat from "../../public/SVG/chat.svg";
import Bookmark from "../../public/SVG/bookmark.svg";
import user from "../assets/img/user.jpg"
const Header = ()=>{
    return(
        <div className={`${classes.header} flex justify-between bg-white items-center h-[7rem]`}>
            {/* <div className={`pl-4`}> */}
                <img className={`h-16`} src={logo}></img>
            {/* </div> */}
            <form className={`flex items-center relative `}>
                <input className={`-bg--color-grey-dark-3/25 place-content-start  w-[95%] self-center py-3 px-40 rounded-2xl focus:w-[100%] transition-all `} placeholder="Search Hotels" type="text"></input>
                <button>
                    {/* <img className={`absolute top-[20%] left-[85%] focus:left-[90%] `} src={mag}></img> */}
                    <svg className={`${classes['search__button']} `}>
                        <use xlinkHref="../../public/sprite.svg#icon-magnifying-glass"></use>
                    </svg>
                    
                </button>
            </form>
            <div className={`flex gap-4 pr-4 items-center self-stretch min-h-full hover:bg-yellow-400`}>
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