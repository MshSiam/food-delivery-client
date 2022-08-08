import React from "react"
import delivery from "../img/delivery.png"
import HomeConntainer from "./HomeConntainer"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { motion } from "framer-motion"
import RowContainer from "./RowContainer"

const MainContainer = () => {
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center overflow-x-hidden">
      <HomeConntainer></HomeConntainer>

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-500 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg
               bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 hover:shadow-lg flex items-center justify-center">
              <MdChevronLeft className="text-base text-white font-semibold" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg
               bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 hover:shadow-lg flex items-center justify-center">
              <MdChevronRight className="text-base text-white font-semibold" />
            </motion.div>
          </div>
        </div>

        <RowContainer flag={true} />
      </section>
    </div>
  )
}

export default MainContainer
