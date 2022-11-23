import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import MiniSidebar from "./MiniSidebar";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer, showTaskModal } from "../state/actions/list_action";
import PlusIcon from "../assets/svgs/messages copy";
import Dropdown from "./Dropdown";
import dayjs from "dayjs";
import CalenderIcon from "../assets/svgs/calender";
import BellIcon from "../assets/svgs/bell";
import { sampleTodo } from "../constants/todo_list";

const NewSideBar = () => {
  const dispatch = useDispatch();
  const i = useSelector((state) => state.list.tabIndex);
  const tasks = useSelector((state) => state.task.tasks);
  const drawer = useSelector((state) => state.list.drawer);
  const selected = useSelector((state) => state.task.dropdownStatus);

  // const filterSelected = tasks.filter((task) => task.status === selected);
  // filter data if status is all then show all data
  const filterSelected =
    selected === "All"
      ? tasks
      : tasks.filter((task) => task.status === selected);
  return (
    <div>
      <Transition.Root className="over" show={drawer} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 "
          onClose={() => console.log("noting")}
        >
          <div
            className="fixed top-0 right-0 h-screen z-40 flex "
            style={{ justifyContent: "right" }}
          >
            <MiniSidebar />

            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex justify-between border-b-2 p-4 ">
                <div
                  onClick={() => dispatch(openDrawer(false))}
                  className="flex items-center pl-2.5  "
                >
                  <span className="self-center truncate   text-2xl font-bold whitespace-nowrap">
                    {sampleTodo[i].title}
                  </span>
                </div>
                <div className="flex items-center pl-2.5 ">
                  <span
                    onClick={() => dispatch(showTaskModal(true))}
                    className="self-center text-xl font-semibold whitespace-nowrap"
                  >
                    <PlusIcon />
                  </span>
                </div>
              </div>
              {i === 2 && (
                <>
                  <Dropdown />
                </>
              )}
              <div
                className={`flex h-full ${
                  filterSelected.length === 0 ? " items-center" : ""
                }`}
              >
                <div>
                  {filterSelected.length !== 0 && i === 2 ? (
                    filterSelected.map((task) => (
                      <div className="m-2 mr-3 p-1 py-2 px-3 w-[300px] h-auto bg-gray-200 rounded-md ">
                        <div className="flex items-center mb-1">
                          <div className="w-6 h-6 rounded-full border-4 border-sky-800" />
                          <p className="ml-2 text-lg font-bold">{task.title}</p>
                        </div>
                        <div className="flex items-center mb-1 ml-1">
                          <div className="flex">
                            <span className="pt-1">
                              <CalenderIcon />
                            </span>
                            <span className="ml-2 mr-5">
                              {dayjs(task.date).format("DD/MM/YYYY")}
                            </span>
                          </div>

                          <div className="flex space-x-2">
                            <BellIcon />
                            <span className="ml-2">10:00</span>
                          </div>
                        </div>
                        <img
                          className="h-7 w-7 mx-1  flex-shrink-0 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="items-center">
                      <p className=" text-xl font-semibold text-center">
                        {sampleTodo[i].subHeading}
                      </p>
                      <p className=" text-center">{sampleTodo[i].paragraph}</p>
                    </div>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default NewSideBar;
