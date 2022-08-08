import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import MainContainer from "./components/MainContainer"
import CreateContainer from "./components/CreateContainer"
import { useStateValue } from "./context/StateProvider"
import { getAllFoodItems } from "./utilities/firebaseFunctions"
import { useEffect } from "react"
import { actionType } from "./context/reducer"

function App() {
  const [{}, dispatch] = useStateValue()

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      console.log(data)
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      })
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-16 md:mt-24 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App
