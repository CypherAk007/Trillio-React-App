import classes from "./Header.module.scss"
import logo from "../assets/img/favicon.png"
import user from "../assets/img/abhishek2.jpg"
const Header = ()=>{
    return(
        <header className={`${classes.header} flex justify-between bg-white items-center text-[1.4rem] h-[7rem] border border-color-grey-light-2 `}>
            {/* <div className={`pl-4`}> */}
                <img className={`h-[3.25rem] ml-8`} src={logo}></img>
            {/* </div> */}
            <form className={`flex items-center  justify-center relative  basis-[40%]`}>
                <input className={`-bg--color-grey-light-2  text-inherit px-[1.5rem] py-[.5rem] rounded-[100px] w-[90%] focus:outline-none focus:w-full focus:-bg--color-grey-light-3 transition-all -mr-12 placeholder:font-thin placeholder:-text--color-grey-light-4 `} placeholder="Search Hotels" type="text"></input>
                <button className={` border-none -bg--color-grey-light-2 focus:outline-none active:translate-y-1 focus:-bg--color-grey-light-3`}>
                    {/* <img className={`absolute top-[20%] left-[85%] focus:left-[90%] `} src={mag}></img> */}
                    <svg className={`${classes['search__icon']} -fill--color-grey-dark-3 h-8 w-8`}>
                        <use xlinkHref="../../public/sprite.svg#icon-magnifying-glass"></use>
                    </svg>
                    
                </button>
            </form>
            <nav className={`${classes['user-nav']} flex items-center self-stretch`}>
                <div className={`${classes['user-nav__icon-box']} py-0 px-8 cursor-pointer h-full hover:-bg--color-grey-light-2 flex items-center relative`}>
                    {/* <img src={Bookmark}></img> */}
                    <svg className={`${classes['user-nav__icon'] } h-9 w-9 -fill--color-grey-dark-2 `}>
                        <use xlinkHref="../../public/sprite.svg#icon-bookmark"></use>
                    </svg>
                    <span className={`${classes['user-nav__notification']} text-[1rem] h-[1.75rem] w-[1.75rem] rounded-[50%] -bg--color-primary text-white absolute top-5 right-4 flex justify-center items-center`}>7</span>
                </div>
                <div className={`${classes['user-nav__icon-box']} py-0 px-8 cursor-pointer h-full hover:-bg--color-grey-light-2 flex items-center relative`}>
                    {/* <img src={Bookmark}></img> */}
                    <svg className={`${classes['user-nav__icon']} h-9 w-9 -fill--color-grey-dark-2 `}>
                        <use xlinkHref="../../public/sprite.svg#icon-chat"></use>
                    </svg>
                    <span className={`${classes['user-nav__notification']} text-[1rem] h-[1.75rem] w-[1.75rem] rounded-[50%] -bg--color-primary text-white absolute top-5 right-4 flex justify-center items-center`}>13</span>
                </div>
                <div className={`${classes['user-nav__user']} py-0 px-8 cursor-pointer h-full hover:-bg--color-grey-light-2 flex items-center`}>
                    <img className={`${classes['user-nav__user-photo']} h-16 rounded-full mr-4`} alt="User Photo" src={user}></img>
                    <span className={`${classes['user-nav__user-name']} text-xl`}>Abhishek</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;