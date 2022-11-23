import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import AddPersonIcon from "../assets/svgs/addPerson";
import SearchIcon from "../assets/svgs/search";
import GreenCheckIcon from "../assets/svgs/green-check";
import { useDispatch, useSelector } from "react-redux";
import { assignUser } from "../state/actions/task_action";
import { users as userd } from "../constants/users";

export default function AddUsers({ users, setUser }) {
  const userData = useSelector((state) => state.task.users);
  const dispatch = useDispatch();

  const assign = (value, index) => {
    const nextShapes = users.map((v, ind) => {
      if (value.id === v.id) {
        return (v = {
          ...value,
          selected: !value.selected,
        });
      } else {
        return v;
      }
    });
    setUser("assigners", nextShapes);
    dispatch(assignUser(nextShapes));
  };
  const [query, setQuery] = useState("");

  const merged = [...userd, ...users];
  const meraged = merged.reduce((acc, a) => {
    const id = parseInt(a.id);
    if (!acc[id] || acc[id]["selected"] !== a.selected)
      acc = { ...acc, [id]: a };
    return acc;
  }, {});
  const myData = Object.keys(meraged).map((key) => {
    return meraged[key];
  });

  const filteredPeople =
    query === ""
      ? myData
      : myData.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  const conditional_data = users ? users : [];
  const selectedUsers = conditional_data.filter((v, i) => v?.selected === true);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex">
        {selectedUsers.map((value) => (
          <img
            src={value.img}
            alt=""
            className="h-8 w-8 mx-1  flex-shrink-0 rounded-full"
          />
        ))}

        <Menu.Button>
          <AddPersonIcon />
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
                  onChange={(event) => setQuery(event.target.value)}
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
                    <SearchIcon />
                  </div>
                </div>
              </div>
            </Menu.Item>

            {filteredPeople.map((value, index) => (
              // <Menu.Item>
              <div
                onClick={() => assign(value, index)}
                className={`flex cursor-pointer justify-between items-center bg-white p-2  rounded-sm ${
                  value.selected ? "bg-[#11366b33]" : "bg-transparent"
                } `}
              >
                <div className="flex items-center">
                  <img
                    src={value.img}
                    alt=""
                    className="h-10 w-10  flex-shrink-0 rounded-full"
                  />
                  <span className={"font-normal ml-3 block truncate"}>
                    {value.name}
                  </span>
                </div>
                {value.selected ? <GreenCheckIcon /> : null}
              </div>
              // </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
