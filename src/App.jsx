import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import RouteLayout from './components/RouteLayout'
import { Children } from 'react'
import HomePage from './pages/Home'
import FlightsPage from './pages/Flights'
import CarRentalsPage from './pages/CarRentals'
import ToursPage from './pages/Tours'

const router = createBrowserRouter([
  {path:'/',element:<RouteLayout></RouteLayout>,
  Children:[
    {index:true,element:<HomePage></HomePage>},
    {path:'flights',element:<FlightsPage></FlightsPage>},
    {path:'carrentals',element:<CarRentalsPage></CarRentalsPage>},
    {path:'tours',element:<ToursPage></ToursPage>}
  ]}
])


const App = ()=>{


  return(
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;