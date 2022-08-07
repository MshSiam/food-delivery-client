import React from "react"
import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from "../firebase.config"

const Header = () => {
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider)
    console.log(response)
  }
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop & tab */}
      <div className="hidden md:flex w-full">
        <motion.Link
          whileTap={{ scale: 0.7 }}
          to="/"
          className="flex items-center gap-2">
          <img
            className="w-8 object-cover cursor-pointer"
            src={Logo}
            alt="logo"
          />
          <p className="text-headingColor text-xl font-bold cursor-pointer">
            Chicken Man
          </p>
        </motion.Link>
        <ul className="flex items-center gap-8 ml-auto">
          <motion.li
            whileTap={{ scale: 0.1 }}
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menu
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.1 }}
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.1 }}
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            About
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.1 }}
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Service
          </motion.li>
        </ul>

        <motion.div
          whileTap={{ scale: 0.7 }}
          className="relative flex items-center justify-center ml-5 text-xl  text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">
          <AiOutlineShoppingCart />
          <div className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-sm text-white font-semibold">2</p>
          </div>
        </motion.div>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="w-10 ml-5 h-10 cursor-pointer"
            alt=""
            onClick={login}
          />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden h-full"></div>
    </header>
  )
}

export default Header
