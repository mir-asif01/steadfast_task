import { useState } from "react"
import { MdMenu, MdOutlineClose } from "react-icons/md"
export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <nav className="flex justify-between items-center py-[20px] px-[35px] relative bg-[#f5efff] shadow-md">
        <div className="text-[30px]">Logo</div>
        <div className="">
          <div>
            <MdMenu
              className="text-[30px] md:hidden"
              onClick={() => setOpenDrawer(true)}
            />
          </div>
          <ul className="hidden md:flex justify-between items-center gap-10 text-lg">
            <li>Home</li>
            <li>Courses</li>
            <li>Login</li>
          </ul>
        </div>
        <ul
          className={`fixed h-[100vh] py-[30px] text-left px-[50px] bg-violet-500 transition-[right] 0.9s ${
            openDrawer ? "top-0 right-0 z-10" : "top-0 right-[-1000px]"
          }`}
        >
          {" "}
          <li className="mx-[5px] my-[10px]">
            <MdOutlineClose
              onClick={() => setOpenDrawer(false)}
              className="text-[30px]"
            />
          </li>
          <li className="mx-[5px] my-[10px]">Home</li>
          <li className="mx-[5px] my-[10px]">Courses</li>
          <li className="mx-[5px] my-[10px]">Login</li>
        </ul>
      </nav>
    </>
  )
}
