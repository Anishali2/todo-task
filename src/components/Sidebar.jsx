import React from "react";
import { useSelector } from "react-redux";
import PlusIcon from "../assets/svgs/messages copy";
import MiniSidebar from "./MiniSidebar";
const Sidebar = () => {
  const tab = useSelector((state) => state.list.tabIndex)
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
    <div className="flex">
      <MiniSidebar/>
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

    </div>

  );
};

export default Sidebar;
