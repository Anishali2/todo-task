import React from "react";

const CircleCheckIcon = () => {
  return (
    <div className=" cursor-pointer">
      <svg
        width="24"
        height="24"
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 20.5C15.5078 20.5 20 16.0469 20 10.5C20 4.99219 15.5078 0.5 10 0.5C4.45312 0.5 0 4.99219 0 10.5C0 16.0469 4.45312 20.5 10 20.5ZM14.4141 8.66406L9.41406 13.6641L8.75 14.3281L8.08594 13.6641L5.58594 11.1641L4.92188 10.5L6.25 9.21094L6.91406 9.875L8.75 11.7109L13.0859 7.33594L13.75 6.67188L15.0391 8L14.375 8.66406H14.4141Z"
          fill="#383D42"
        />
      </svg>
    </div>
  );
};

export default CircleCheckIcon;
