import { useState } from 'react'
import CrossIcon from '../assets/svgs/cross'
import LinkIcon from '../assets/svgs/link'
import AddUsers from './AddUsers'
import Calender from './Calender'

export default function TaskModal() {
  const [calenderModal,setCalenderModal] = useState(false)
  return (

  
    <div className=" bg-white shadow sm:rounded-lg w-full">
      
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-3 flex justify-between sm:px-6">
            <dt></dt>
            <dd className=" text-md text-gray-700 mt-2"><CrossIcon/></dd>
          </div>
          <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
            <dt className="text-md  font-extrabold text-black w-1/4 ">Title</dt>
            <dd className=" text-md text-gray-700 sm:mt-0">My First Task</dd>
          </div>
          <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
            <dt className="text-md  font-extrabold text-black w-1/4 ">Description</dt>
            <dd className="mt-1 text-md text-gray-400 sm:mt-0 italic">Add Description</dd>
          </div>
          <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
            <dt className="text-md  font-extrabold text-black w-1/4 ">Date</dt>
            <dd className="mt-1 text-md text-blue-700 sm:mt-0 " onClick={() => setCalenderModal(true)}>Add Date </dd>
            {calenderModal  && <Calender/>}
          </div>
          <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
            <dt className="text-md  font-extrabold text-black w-1/4 ">Creater</dt>
            <img class="h-8 w-8 -mt-1 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>

          </div>
          <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
            <dt className="text-md  font-extrabold text-black w-1/4 ">Assign</dt>
            {/* <AddPersonIcon/> */}
            <AddUsers/>
          </div>
          <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
            <dt className="text-md  font-extrabold text-black w-1/4 ">Attachement</dt>
            <dd className="mt-1 text-md text-blue-700 sm:mt-0  ">browse</dd>
          </div>
          <div className="bg-gray-50 px-4 py-3 flex justify-between sm:px-6">
            <dt className="m-3 "><LinkIcon/></dt>
            <button className=" text-md w-fit h-auto p-3 px-5 bg-[#A7C040] rounded-md text-white sm:mt-0 hover:bg-[#A7C04090]">SAVE</button>
          </div>
        </dl>
      </div>
    </div>
    
  )
}
