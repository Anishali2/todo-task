import React from "react";

const MessageIcon = () => {
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
          d="M3 0.5C1.59375 0.5 0.5 1.63281 0.5 3V10.5C0.5 11.9062 1.59375 13 3 13H4.25V14.875C4.25 15.1484 4.36719 15.3438 4.5625 15.4609C4.79688 15.5391 5.03125 15.5391 5.22656 15.3828L8.39062 13H14.25C15.6172 13 16.75 11.9062 16.75 10.5V3C16.75 1.63281 15.6172 0.5 14.25 0.5H3ZM14.25 14.25H10.5V15.5C10.5 16.9062 11.5938 18 13 18H17.5703L20.7344 20.3828C20.9297 20.5391 21.1641 20.5391 21.3984 20.4609C21.5938 20.3438 21.75 20.1484 21.75 19.875V18H23C24.3672 18 25.5 16.9062 25.5 15.5V8C25.5 6.63281 24.3672 5.5 23 5.5H18V10.5C18 12.5703 16.3203 14.25 14.25 14.25Z"
          fill="#383D42"
        />
      </svg>
    </div>
  );
};

export default MessageIcon;
