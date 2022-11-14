import React from 'react'
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import MiniSidebar from './MiniSidebar';
import { useSelector } from 'react-redux';

const NewSideBar = () => {
    const [open, setOpen] = useState(true);

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
    <div>
<div className="flex float-right">
        <MiniSidebar/>
      </div>
         <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 " onClose={() => console.log("noting")}>
          
            <div className="fixed inset-0 " />

          <div
            className="fixed inset-0 z-40 flex "
            style={{ justifyContent: "right" }}
          >
              <MiniSidebar/>

            

              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                {/* <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <p>X</p>
                  </button>
                </div>

                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4"></Tab.List>
                  </div>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Admission
                    </a>
                  </div>
                </div>
                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Academics
                    </a>
                  </div>
                </div>
                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Campus
                    </a>
                  </div>
                </div>
                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      About-us
                    </a>
                  </div>
                </div> */}
      <div className="flex justify-between border-b-2">
      <div
            onClick={()=> setOpen(false)}
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
            {/* <PlusIcon/> */}x
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