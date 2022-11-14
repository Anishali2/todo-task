import "./App.css";
import Sidebar from "../src/components/Sidebar";
import TaskModal from "./components/TaskModal";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import NewSideBar from "./components/NewSideBar";
import MiniSidebar from "./components/MiniSidebar";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      
      <TaskModal />
      <NewSideBar />
    </div>
  );
}
export default App;

{
  /* <div className="lg:flex lg:justify-between lg:items-center"> */
}
{
  /* <div>left</div> */
}
{
  /* <div className=" max-w-[600px]"> */
}
{
  /* </div> */
}
{
  /* <Sidebar /> */
}
