import {NavLink,Link} from 'react-router-dom'
import classes from './SideBar.module.scss'

const hovereffect =''
const sideLink = ''
const SideBar = ()=>{
    return (
        <nav className={`${classes.sidebar} -bg--color-grey-dark-1 text-white  grow-0 shrink-0 basis-[18%] flex flex-col justify-between ml-`}>
            <ul className={`${classes['side-nav']}  `}>
                <li className={`${classes['side-nav__item']} ` }>
                    <NavLink to='' className={`${classes['side-nav__link']}`}>
                        <svg className={`${classes['side-nav__icon'] } h-9 w-9 fill-current mr-8 `}>
                            <use xlinkHref="../../public/sprite.svg#icon-home"></use>
                        </svg>
                        <span>Hotels</span>
                    </NavLink>
                </li>
                <li className={`${classes['side-nav__item']} py-4 relative before:absolute before:content-[''] before:top-0 before:left-0 before:-bg--color-primary-light before:w-[3px] before:translate-y-0 before:transition-transform hover:before:scale-y-100 hover:before:w-full  ` }>
                    <NavLink to='' className={`${classes['side-nav-link']} -text--color-grey-light-1 uppercase  flex  items-center py-6 px-12 `}>
                        <svg className={`${classes['side-nav__icon'] } h-9 w-9 fill-current mr-8 `}>
                            <use xlinkHref="../../public/sprite.svg#icon-aircraft-take-off"></use>
                        </svg>
                        <span>Flight</span>
                    </NavLink>
                </li>
                <li className={`${classes['side-nav__item']} py-4 relative before:absolute before:content-[''] before:top-0 before:left-0 before:-bg--color-primary-light before:w-[3px] before:translate-y-0 before:transition-transform hover:before:scale-y-100 hover:before:w-full  ` }>
                    <NavLink to='' className={`${classes['side-nav-link']} -text--color-grey-light-1 uppercase  flex  items-center py-6 px-12 `}>
                        <svg className={`${classes['side-nav__icon'] } h-9 w-9 fill-current mr-8 `}>
                            <use xlinkHref="../../public/sprite.svg#icon-key"></use>
                        </svg>
                        <span>Car rental</span>
                    </NavLink>
                </li>
                <li className={`${classes['side-nav__item']} py-4 relative before:absolute before:content-[''] before:top-0 before:left-0 before:-bg--color-primary-light before:w-[3px] before:translate-y-0 before:transition-transform hover:before:scale-y-100 hover:before:w-full  ` }>
                    <NavLink to='' className={`${classes['side-nav-link']} -text--color-grey-light-1 uppercase  flex  items-center py-6 px-12 `}>
                        <svg className={`${classes['side-nav__icon'] } h-9 w-9 fill-current mr-8 `}>
                            <use xlinkHref="../../public/sprite.svg#icon-map"></use>
                        </svg>
                        <span>Tours</span>
                    </NavLink>
                </li>
                
            </ul>
            <div className={`text-[1.2rem] text-center p-[2.5rem] -text--color-grey-light-4`}>
                &copy; 2023 by Abhishek Krishna. All rights reserved
            </div>
        </nav>
    )
}

export default SideBar;