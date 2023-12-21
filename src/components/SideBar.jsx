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
                <li className={`${classes['side-nav__item']} ` }>
                    <NavLink to='flights' className={`${classes['side-nav__link']}`}>
                        <svg className={`${classes['side-nav__icon'] } h-9 w-9 fill-current mr-8 `}>
                            <use xlinkHref="../../public/sprite.svg#icon-aircraft-take-off"></use>
                        </svg>
                        <span>flights</span>
                    </NavLink>
                </li>
                <li className={`${classes['side-nav__item']} ` }>
                    <NavLink to='carrentals' className={`${classes['side-nav__link']}`}>
                        <svg className={`${classes['side-nav__icon'] } h-9 w-9 fill-current mr-8 `}>
                            <use xlinkHref="../../public/sprite.svg#icon-key"></use>
                        </svg>
                        <span>car rental</span>
                    </NavLink>
                </li>
                <li className={`${classes['side-nav__item']} ` }>
                    <NavLink to='tours' className={`${classes['side-nav__link']}`}>
                        <svg className={`${classes['side-nav__icon'] } h-9 w-9 fill-current mr-8 `}>
                            <use xlinkHref="../../public/sprite.svg#icon-map"></use>
                        </svg>
                        <span>tours</span>
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