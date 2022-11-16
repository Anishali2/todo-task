import React from 'react'
import { Dialog, Transition } from "@headlessui/react";
import {  Fragment } from "react";
import MiniSidebar from './MiniSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { openDrawer, showTaskModal } from '../state/actions/list_action';
import PlusIcon from '../assets/svgs/messages copy';

const NewSideBar = () => {
    const dispatch = useDispatch()
    const tab = useSelector((state) => state.list.tabIndex)
    const drawer = useSelector((state) => state.list.drawer)
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
    <div>

         <Transition.Root show={drawer} as={Fragment}>
        <Dialog as="div" className="relative z-40 " onClose={() => console.log("noting")}>
          

          <div
            className="fixed top-0 right-0 h-screen z-40 flex "
            style={{ justifyContent: "right" }}
          >
              <MiniSidebar/>

            

              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
             
      <div className="flex justify-between border-b-2 p-4 ">
      <div
            onClick={()=> dispatch(openDrawer(false))}
          className="flex items-center pl-2.5  "
        >
         
          <span className="self-center truncate   text-2xl font-bold whitespace-nowrap">
            {sampleData[tab].title}
          </span>
        </div>
        <div
          className="flex items-center pl-2.5 "
        >
         
          <span onClick={() => dispatch(showTaskModal(true))} className="self-center text-xl font-semibold whitespace-nowrap">
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
       
              </Dialog.Panel>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default NewSideBar