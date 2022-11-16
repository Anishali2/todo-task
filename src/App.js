import "./App.css";
import Sidebar from "../src/components/Sidebar";
import TaskModal from "./components/TaskModal";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import NewSideBar from "./components/NewSideBar";
import MiniSidebar from "./components/MiniSidebar";
import { useSelector } from "react-redux";

function App() {
  const open = useSelector((state) => state.list.drawer);
  return (
    <div>
      <div className="w-full">
        <div
          className={`flex mx-auto h-screen items-center ${
            open ? " w-[40%]" : "w-[50%]"
          }`}
        >
          <TaskModal />
        </div>
        <div className={`${open ? " w-[30%]" : "w-[10%]"}`}>
          <div className={` absolute top-0 right-0`}>
            <MiniSidebar />
          </div>
          <NewSideBar />
        </div>
      </div>
    </div>
  );
}
export default App;
