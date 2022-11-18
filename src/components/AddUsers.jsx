import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import AddPersonIcon from '../assets/svgs/addPerson'
import SearchIcon from '../assets/svgs/search'
import GreenCheckIcon from '../assets/svgs/green-check'


export default function AddUsers() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button >
          <AddPersonIcon/>
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
        <Menu.Items className="absolute p-2  left-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          
            <Menu.Item disabled>
              <div className="relative mt-1 mb-2 rounded-md shadow-sm">
    
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full h-12 text-xl rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 "
        />
           
        <div className="absolute inset-y-0 right-0 flex items-center">
          
          <div
            id="currency"
            name="currency"
            className="h-full mt-8 rounded-md border-transparent bg-transparent py-0 pl-2 pr-4 text-gray-500  text-md"
          >
            <SearchIcon/>
          </div>
        </div>
      </div>
  

            </Menu.Item>
            
           {["Levi","Light","Walter"].map((value,index) => (

            <Menu.Item>
              <div className='flex justify-between items-center bg-white p-2  rounded-sm  hover:bg-[#11366B33] '>
            <div className="flex items-center" >
                          <img  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10  flex-shrink-0 rounded-full" />
                          <span
                            className={'font-normal ml-3 block truncate'}
                          >
                           {value} 
                          </span>
                    </div>
                          <GreenCheckIcon/>
                    </div>
            </Menu.Item>))}
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
