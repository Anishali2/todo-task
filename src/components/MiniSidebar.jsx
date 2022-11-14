import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import BooksIcon from "../assets/svgs/books";
import CircleCheckIcon from "../assets/svgs/circle-check";
import MessageIcon from "../assets/svgs/messages";
import RobotIcon from "../assets/svgs/robot";
import { openDrawer, switchNum } from "../state/actions/list_action";
const MiniSidebar = () => {  
    const tab = useSelector((state) => state.list.tabIndex)
    const con = useSelector((state) => state.list)
    console.log("MiniSidebar ~ con", con)
  const dispatch = useDispatch()
  return (
    
    <aside className="w-10 float-right" aria-label="Sidebar">
      <div className="overflow-y-auto rounded-tl-md rounded-bl-md mt-20 ">
        <ul className="">
          <li onClick={() => {dispatch(switchNum(0));dispatch(openDrawer(true))}} className={`h-10 w-10 p-2 ${tab === 0 ? "bg-[#11366b54]" : "bg-white"} `}>
           <RobotIcon/>
       </li>
       <li onClick={() => dispatch(switchNum(1))} className={`h-10 w-10 p-2 ${tab ===   1 ? "bg-[#11366b54]" : "bg-white"} `}>
           <MessageIcon/>
       </li>
       <li  onClick={() => dispatch(switchNum(2))} className={`h-10 w-10 p-2 ${tab === 2 ? "bg-[#11366b54]" : "bg-white"} `}>
           <CircleCheckIcon/>
       </li>
       <li  onClick={() => dispatch(switchNum(3))} className={`h-10 w-10 p-2 ${tab === 3 ? "bg-[#11366b54]" : "bg-white"} `}>
           <BooksIcon/>
       </li>
        </ul>
      </div>
    </aside>

    
  )
}

export default MiniSidebar