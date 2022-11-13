import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BooksIcon from "../assets/svgs/books";
import CircleCheckIcon from "../assets/svgs/circle-check";
import MessageIcon from "../assets/svgs/messages";
import PlusIcon from "../assets/svgs/messages copy";
import RobotIcon from "../assets/svgs/robot";
import { switchNum } from "../state/actions/list_action";
const Sidebar = () => {
  const tab = useSelector((state) => state.list.tabIndex)
  const dispatch = useDispatch()
  console.log("state", tab)
  const sampleData = [
    {
      title:"Assistant",
      subHeading:"No Bots Here 🙁",
      paragraph:"Get started by clicking on the + in the top right corner."
    },
    {
      title:"Messages",
      subHeading:"No Messages 🙁",
      paragraph:"Get started by clicking on the + in the top right corner."
    },
    {
      title:"Task",
      subHeading:"No Tasks 🙁",
      paragraph:"Get started by clicking on the + in the top right corner."
    },
    {
      title:"Knowledge Base",
      subHeading:"No Knowledge Articles 🙁",
      paragraph:"Get started by clicking on the + in the top right corner."
    }
  ]
  return (
    <>
    <aside className="w-64 float-right" aria-label="Sidebar">
      <div className="overflow-y-auto h-screen py-4 px-3 bg-gray-50 rounded ">
      <div className="flex justify-between border-b-2">
      <div
          className="flex items-center pl-2.5 mb-5 "
        >
         
          <span className="self-center truncate   text-2xl font-bold whitespace-nowrap">
            {sampleData[tab].title}
          </span>
        </div>
        <div
          className="flex items-center pl-2.5 mb-5"
        >
         
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            <PlusIcon/>
          </span>
        </div>
      </div >
       <div className="flex h-full  items-center">
        <div>

       <p className=" text-xl font-semibold text-center">{sampleData[tab].subHeading}</p>
       <p className=" text-center">{sampleData[tab].paragraph}</p>
        </div>
       </div>
       
      </div>
    </aside>
    <aside className="w-10 float-right" aria-label="Sidebar">
      <div className="overflow-y-auto rounded-tl-md rounded-bl-md mt-20 ">
        <ul className="">
          <li onClick={() => dispatch(switchNum(0))} className={`h-10 w-10 p-2 ${tab == 0 ? "bg-[#11366b54]" : "bg-white"} `}>
           <RobotIcon/>
       </li>
       <li onClick={() => dispatch(switchNum(1))} className={`h-10 w-10 p-2 ${tab == 1 ? "bg-[#11366b54]" : "bg-white"} `}>
           <MessageIcon/>
       </li>
       <li  onClick={() => dispatch(switchNum(2))} className={`h-10 w-10 p-2 ${tab == 2 ? "bg-[#11366b54]" : "bg-white"} `}>
           <CircleCheckIcon/>
       </li>
       <li  onClick={() => dispatch(switchNum(3))} className={`h-10 w-10 p-2 ${tab == 3 ? "bg-[#11366b54]" : "bg-white"} `}>
           <BooksIcon/>
       </li>
        </ul>
      </div>
    </aside>

    </>

  );
};

export default Sidebar;
