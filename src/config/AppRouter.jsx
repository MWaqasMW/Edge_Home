import { BrowserRouter ,Routes,Route, } from "react-router-dom"
import Home from "../pages/home/Home"
import List from "../pages/list/List"
import Hotel from "../pages/hotel/Hotel"
import Service from "../pages/service/Service"


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/service"} element={<Service/>}></Route>
            <Route path={"/hotels"} element={<List/>}></Route>
            <Route path={"/hotel/:id"} element={<Hotel/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter