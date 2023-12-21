import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import classes from './App.module.scss'
import RouteLayout from './components/RouteLayout'
import { Children } from 'react'
import HomePage from './pages/Home'
import FlightsPage from './pages/Flights'
import CarRentalsPage from './pages/CarRentals'
import ToursPage from './pages/Tours'
// This is App .js/ 
const router = createBrowserRouter([
  {path:'/',element:<RouteLayout></RouteLayout>,
  children:[
    {index:true,element:<HomePage></HomePage>},
    {path:'flights',element:<FlightsPage></FlightsPage>},
    {path:'carrentals',element:<CarRentalsPage></CarRentalsPage>},
    {path:'tours',element:<ToursPage></ToursPage>}
  ]}
])


const App = ()=>{


  return(
    <div className={`${classes.app}`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;