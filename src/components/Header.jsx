import React from "react"

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
      {/* desktop & tab */}
      <div className="hidden md:flex w-full"></div>
      {/* mobile */}
      <div className="flex md:hidden h-full"></div>
    </div>
  )
}

export default Header
