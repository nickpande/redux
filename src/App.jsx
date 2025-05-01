import React from "react"
import Users from "./components/Users"
import Products from './components/Products'
import { Link ,Routes,Route } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
// import { increment,decrement,incrementAsync} from "./assets/counter/Counter"
function App() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()
  // const handleClick = () => {
  //   dispatch(incrementAsync(5)); // dispatch the thunk, passing the amount
  // };

  return (
   <>
<nav className="m-auto mt-4 mb-4  w-[50%] max-w-4xl h-14 px-6 py-2 bg-zinc-100 shadow-md rounded-xl flex justify-around items-center">
  <Link to="/user" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">User</Link>
  <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Products</Link>
  <Link to="/About" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">About</Link>
</nav>

    <Routes>
      <Route path="/user" element={<Users />} />
      <Route path="products" element={<Products/>} />
    </Routes>
    </>
  )
}

export default App
