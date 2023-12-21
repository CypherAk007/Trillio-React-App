import classes from "./Header.module.scss"
import logo from "../assets/img/favicon.png"
import { useHref } from "react-router-dom";
import mag from "../../public/SVG/magnifying-glass.svg";
import chat from "../../public/SVG/chat.svg";
import Bookmark from "../../public/SVG/bookmark.svg";
import user from "../assets/img/user.jpg"
const Header = ()=>{
    return(
        <header className={`${classes.header} flex justify-between bg-white items-center text-[1.4rem] h-[7rem] border border-color-grey-light-2 `}>
            {/* <div className={`pl-4`}> */}
                <img className={`h-[3.25rem]`} src={logo}></img>
            {/* </div> */}
            <form className={`flex items-center  justify-center relative bg-orange-500 basis-[40%]`}>
                <input className={`-bg--color-grey-light-2  text-inherit px-[.7rem] py-[.5rem] rounded-[100px] w-[90%] focus:outline-none focus:w-full focus:-bg--color-grey-light-3 transition-all -mr-12 placeholder:font-thin placeholder:-text--color-grey-light-4 `} placeholder="Search Hotels" type="text"></input>
                <button className={` border-none -bg--color-grey-light-2 focus:outline-none active:translate-y-1 focus:-bg--color-grey-light-3`}>
                    {/* <img className={`absolute top-[20%] left-[85%] focus:left-[90%] `} src={mag}></img> */}
                    <svg className={`${classes['search__icon']} -fill--color-grey-dark-3 h-8 w-8`}>
                        <use xlinkHref="../../public/sprite.svg#icon-magnifying-glass"></use>
                    </svg>
                    
                </button>
            </form>
            <nav className={`${classes['user-nav']} flex gap-4 pr-4 items-center self-stretch min-h-full hover:bg-yellow-400`}>
                <div className={`${classes['user-nav__icon-box']} min-h-full`}>
                    {/* <img src={Bookmark}></img> */}
                    <svg className={`${classes['user-nav__icon'] } h-9 w-9 `}>
                        <use xlinkHref="../../public/sprite.svg#icon-bookmark"></use>
                    </svg>
                    <span className={`${classes['user-nav__notification']}`}>7</span>
                </div>
                <div className={`${classes['user-nav__icon-box']} min-h-full`}>
                    {/* <img src={Bookmark}></img> */}
                    <svg className={`${classes['user-nav__icon']} h-9 w-9 `}>
                        <use xlinkHref="../../public/sprite.svg#icon-chat"></use>
                    </svg>
                    <span className={`${classes['user-nav__notification']}`}>13</span>
                </div>
                <div className={`${classes['user-nav__user']} ml-4 flex items-center gap-4 min-h-full hover:bg-pink-500`}>
                    <img className={`${classes['user-nav__user-photo']} h-16 rounded-full`} alt="User Photo" src={user}></img>
                    <span className={`${classes['user-nav__user-name']} text-xl`}>Jonas</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;