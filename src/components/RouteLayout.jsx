import Header from "./Header";

const RouteLayout = ()=>{
    return(
        <div className={`bg-white max-w-[120rem] my-[10rem] mx-auto min-h-[50rem]`}>
            <Header></Header>
            <div className={`flex`}>
                <h1 className={`  bg-orange-400 basis-[15%]`}>Main Navigation</h1>
                <h1 className={` bg-slate-300 flex-1`}>Content</h1>
            </div>
        </div>
    )
}
export default RouteLayout;