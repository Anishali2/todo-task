import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import "react-datepicker/dist/react-datepicker.css";
import CrossIcon from '../assets/svgs/cross'
import BellIcon from '../assets/svgs/bell'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const CustomCalender = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [showReminder, setShowReminder] = useState();
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button >
        {/* Options */}
        <p className=" cursor-pointer text-blue-600">Add Date</p>
        {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
         <Menu.Items className="absolute px-2  w-fit  left-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
<div>

    <DatePicker selected={startDate} open={true} customInput={<></>} showPopperArrow={false} onChange={(date) => setStartDate(date)} />
   
   {!showReminder ? 
<p className=" cursor-pointer text-blue-600" onClick={() => setShowReminder(true)}>Add Reminder</p>
   :     <div className="flex relative mt-1 mb-2 rounded-md shadow-sm">
      <div
       id="currency"
       name="currency"
       className="h-full mt-2 rounded-md border-transparent bg-transparent py-0 pl-2 pr-4 text-gray-500  text-md"
     >
    <BellIcon/>
    </div>
   <input
     type="text"
     name="price"
     id="price"
     placeholder="10:00"
     className="block w-full  text-sm rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 "
   />
      
   <div className="absolute inset-y-0 right-0 flex items-center">
     
     <div
        onClick={() => setShowReminder(false)}
       id="currency"
       name="currency"
       className="h-full mt-6 rounded-md border-transparent bg-transparent py-0 pl-2 pr-4 text-gray-500  text-md"
     >
       <CrossIcon/>
     </div>
   </div>
 </div>
} 

<button className="bg-[#A7C040] w-full py-1 my-2 px-4 text-white rounded-sm">Done</button>
</div>
</Menu.Items>
</Transition>
    </Menu>
    );
};
export default CustomCalender