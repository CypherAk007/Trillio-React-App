import classes from './Home.module.scss'
import h1 from '../assets/img/hotel-1.jpg'
import h2 from '../assets/img/hotel-2.jpg'
import h3 from '../assets/img/hotel-3.jpg'
import u1 from '../assets/img/user-3.jpg'
import u2 from '../assets/img/user-4.jpg'
import u3 from '../assets/img/user-5.jpg'
import u4 from '../assets/img/user-6.jpg'
import u5 from '../assets/img/user-1.jpg'
import u6 from '../assets/img/user-2.jpg'

const HomePage = ()=>{
    return (
        <div>
            <div className={` flex `}>
                <img src={h1} className={` w-[33.33%] h-[33.33%]`}></img>
                <img src={h2} className={` w-[33.33%] h-[33.33%]`}></img>
                <img src={h3} className={` w-[33.33%] h-[33.33%]`}></img>
            </div>
            <div className={`h-[6rem] bg-white shadow-light flex justify-between items-center`}>
                <div className={`flex items-center`}>
                    <div className={`uppercase text-4xl font-thin mx-8`}>Hotel las palmas</div>
                    <div>
                        <div className={`mr-auto  flex`}>
                            <svg className={`${classes['user-nav__icon'] } h-7 w-7  -fill--color-primary-dark `}>
                                <use xlinkHref="../../public/sprite.svg#icon-star"></use>
                            </svg>
                            <svg className={`${classes['user-nav__icon'] } h-7 w-7  -fill--color-primary-dark `}>
                                <use xlinkHref="../../public/sprite.svg#icon-star"></use>
                            </svg>
                            <svg className={`${classes['user-nav__icon'] } h-7 w-7  -fill--color-primary-dark `}>
                                <use xlinkHref="../../public/sprite.svg#icon-star"></use>
                            </svg>
                            <svg className={`${classes['user-nav__icon'] } h-7 w-7  -fill--color-primary-dark `}>
                                <use xlinkHref="../../public/sprite.svg#icon-star"></use>
                            </svg>
                            <svg className={`${classes['user-nav__icon'] } h-7 w-7  -fill--color-primary-dark `}>
                                <use xlinkHref="../../public/sprite.svg#icon-star"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={`flex gap-4 items-center self-stretch`}>
                    <div className={`flex`}>
                        <svg className={`${classes['user-nav__icon'] } h-7 w-7  -fill--color-primary-dark `}>
                            <use xlinkHref="../../public/sprite.svg#icon-location-pin"></use>
                        </svg>
                        <div className={` -border--color-primary border-b-2  font-medium text-lg mr-4`}>
                            Bangalore, Karnataka
                        </div>
                    </div>
                    <div className={`px-8 flex flex-col items-center justify-center h-full font-thin text-white -bg--color-primary`}>
                        <div className={`text-3xl pb-2`}>8.6</div>
                        <div>500 votes</div>
                    </div>
                </div>
            </div>
            <div className={`flex `}>
                <div className={`basis-[65%] `}>
                    <div className={`shadow-light bg-white m-16 min-h-[40rem] w-[80%] tracking-wide  p-12 -text--color-primary-dark text-xl`}>
                        <p className={`mb-6 `}>The essence of <b>Hotel las palmas</b> is reflected in every aspect of who we are and what we do. We provide unparalleled service, comfort, and style while creating meaningful and memorable experiences. </p>
                        <p className={`mb-16`}>By paying close attention to the small details that make a big difference, we inspire unforgettable experiences with every stay.</p>
                        <div>
                            <ul className={` flex flex-wrap`}>
                                <li className={`flex gap-3 my-4 basis-[50%] items-center`}>
                                    <div className={`${classes['content-item']} flex`}></div>
                                    <p className={` font-medium`}>Close to the beach</p>
                                </li>
                                
                                <li className={`flex gap-3 my-4 basis-[50%] items-center`}>
                                    <div className={`${classes['content-item']} flex`}></div>
                                    <p className={` font-medium`}>Breakfast Included</p>
                                </li>
                                <li className={`flex gap-3 my-4 basis-[50%] items-center`}>
                                    <div className={`${classes['content-item']} flex`}></div>
                                    <p className={` font-medium`}>Free Airport Shuttle</p>
                                </li>
                                <li className={`flex gap-3 my-4 basis-[50%] items-center`}>
                                    <div className={`${classes['content-item']} flex`}></div>
                                    <p className={` font-medium`}>Air Conditioning and heating</p>
                                </li>
                                <li className={`flex gap-3 my-4 basis-[50%] items-center`}>
                                    <div className={`${classes['content-item']} flex`}></div>
                                    <p className={` font-medium`}>Free Wifi for all Rooms</p>
                                </li>
                                <li className={`flex gap-3 my-4 basis-[50%] items-center`}>
                                    <div className={`${classes['content-item']} flex`}></div>
                                    <p className={` font-medium`}>Pets Allowed</p>
                                </li>
                                <li className={`flex gap-3 my-4 basis-[50%] items-center`}>
                                    <div className={`${classes['content-item']} flex`}></div>
                                    <p className={` font-medium`}>Perfect for Families</p>
                                </li>
                                <li className={`flex gap-3 my-4 basis-[50%] items-center`}>
                                    <div className={`${classes['content-item']} flex`}></div>
                                    <p className={` font-medium`}>We speak all languages</p>
                                </li>
                                
                            </ul>
                        </div>
                        <div className={`mt-32 flex items-center justify-between `}>
                            <div>Lucy and 3 other friends  recommend this hotel.</div>
                            <div className={`flex `}>
                                <img className={'h-[4rem] w-[4rem] rounded-full  border-white border-2 -mr-4'} src={u1}></img>
                                <img className={'h-[4rem] w-[4rem] rounded-full border-white border-2 -mr-4'} src={u2}></img>
                                <img className={'h-[4rem] w-[4rem] rounded-full border-white border-2 -mr-4'} src={u3}></img>
                                <img className={'h-[4rem] w-[4rem] rounded-full border-white border-2 -mr-4'} src={u4}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` flex-1 relative flex flex-col items-center`}>
                    <div className={`${classes['description']}  bg-white m-16 min-h-[10rem] shadow-light p-8 text-xl -text--color-primary-dark font-normal`}>
                        <p className={` z-10 relative`}>
                            Radisson Blu, located on Bengaluru's Outer Ring Road in Marathalli, stands as a beacon of luxury.  As part of recreational facilities, they have temperature-controlled pool 
                        </p>
                        <div className={`mt-8 flex justify-between items-center`}>
                            <div className={`flex gap-6`}>
                            <img className={'h-[4rem] w-[4rem] rounded-full'} src={u5}></img>
                                <div className={`flex flex-col`}>
                                    <div className={`text-2xl font-bold uppercase`}>Nick smith</div>
                                    <div className={`font-thin text-lg`}>Feb 23rd, 2017</div>
                                </div>
                            </div>
                            <div className={`text-3xl`}>7.8</div>
                        </div>
                    </div>

                    <div className={`${classes['description']}  bg-white mt-8 m-16 min-h-[10rem] shadow-light p-8 text-xl -text--color-primary-dark font-normal`}>
                        <p className={` z-10 relative`}>
                        As part of recreational facilities, they have temperature-controlled pool offering a refreshing respite, while the well-equipped fitness center caters to health enthusiasts.
                        </p>
                        <div className={`mt-8 flex justify-between items-center`}>
                            <div className={`flex gap-6`}>
                            <img className={'h-[4rem] w-[4rem] rounded-full'} src={u6}></img>
                                <div className={`flex flex-col`}>
                                    <div className={`text-2xl font-bold uppercase`}>Martha</div>
                                    <div className={`font-thin text-lg`}>Feb 23rd, 2017</div>
                                </div>
                            </div>
                            <div className={`text-3xl`}>7.8</div>
                        </div>
                    </div>
                    <div >

                        <button className={`-mt-4 -border--color-primary border-b-2  text-xl font-semibold`}> Show all &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;