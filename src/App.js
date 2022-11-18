import "./App.css";
import TaskModal from "./components/TaskModal";
import NewSideBar from "./components/NewSideBar";
import MiniSidebar from "./components/MiniSidebar";
import { useSelector } from "react-redux";

function App() {
  const open = useSelector((state) => state.list.drawer);
  const task = useSelector((state) => state.list.taskModal);
  return (
    <div>
      <div className="w-full">
        <div
          className={`flex mx-auto h-screen items-center ${
            open ? " w-[40%]" : "w-[38%]"
          }`}
        >
          {task && <TaskModal />}
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
