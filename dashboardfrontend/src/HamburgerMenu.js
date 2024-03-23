// import React, { useState } from "react";

// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("Home");

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (item) => {
//     setActiveItem(item);
//     toggleMenu();
//   };

//   return (
//     <div className="flex md:hidden">
//       <button
//         onClick={toggleMenu}
//         className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800"
//         aria-expanded={isOpen ? "true" : "false"}
//       >
//         <span className="sr-only">Open main menu</span>
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           {isOpen ? (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           ) : (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           )}
//         </svg>
//       </button>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50">
//           <div className="absolute top-0 right-0 p-4">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-300 focus:outline-none"
//             >
//               <span className="sr-only">Close main menu</span>
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="fixed inset-y-0 left-0 flex flex-col w-64 px-4 py-8 bg-white shadow">
//             <a
//               href="#"
//               className={`${
//                 activeItem === "Home"
//                   ? "text-gray-800 font-bold"
//                   : "text-gray-600"
//               } hover:text-gray-900`}
//               onClick={() => handleItemClick("Home")}
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className={`${
//                 activeItem === "About"
//                   ? "text-gray-800 font-bold"
//                   : "text-gray-600"
//               } hover:text-gray-900`}
//               onClick={() => handleItemClick("About")}
//             >
//               About
//             </a>
//             <a
//               href="#"
//               className={`${
//                 activeItem === "Services"
//                   ? "text-gray-800 font-bold"
//                   : "text-gray-600"
//               } hover:text-gray-900`}
//               onClick={() => handleItemClick("Services")}
//             >
//               Services
//             </a>
//             <a
//               href="#"
//               className={`${
//                 activeItem === "Contact"
//                   ? "text-gray-800 font-bold"
//                   : "text-gray-600"
//               } hover:text-gray-900`}
//               onClick={() => handleItemClick("Contact")}
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;
