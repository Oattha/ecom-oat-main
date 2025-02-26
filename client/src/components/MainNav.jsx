// rafce
// rfce
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import { ChevronDown } from "lucide-react";

function MainNav() {
<<<<<<< HEAD
  const carts = useEcomStore((s) => s.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);
=======
  // Javascript
  const carts = useEcomStore((s) => s.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);
  // console.log(Boolean(user))
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

<<<<<<< HEAD
=======
  console.log(carts.length);
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-6">
            <Link to={"/"} className="text-2xl font-bold">
              LOGO
            </Link>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium "
              }
              to={"/"}
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium "
              }
              to={"/shop"}
            >
              Shop
            </NavLink>
<<<<<<< HEAD
=======
            {/* Badge */}
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium "
              }
              to={"/cart"}
            >
              Cart
              {carts.length > 0 && (
<<<<<<< HEAD
                <span className="absolute top-0 bg-red-500 rounded-full px-2">
=======
                <span
                  className="absolute top-0
               bg-red-500 rounded-full px-2"
                >
>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
                  {carts.length}
                </span>
              )}
            </NavLink>
          </div>

<<<<<<< HEAD
          {user ? (
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 hover:bg-gray-200 px-2 py-3 rounded-md"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={user.picture || "https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon.png"}
                  alt="Profile"
                />
                <ChevronDown />
              </button>

              {isOpen && (
                <div className="absolute top-16 bg-white shadow-md z-50">
                  <Link to={"/user/profile"} className="block px-4 py-2 hover:bg-gray-200">
                    Profile
                  </Link>
                  <Link to={"/user/history"} className="block px-4 py-2 hover:bg-gray-200">
                    History
                  </Link>
                  <button onClick={() => logout()} className="block px-4 py-2 hover:bg-gray-200">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                    : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium "
                }
                to={"/register"}
              >
                Register
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                    : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium "
                }
                to={"/login"}
              >
                Login
              </NavLink>
            </div>
          )}
=======

          {
            user 
            ?  <div className="flex items-center gap-4">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 hover:bg-gray-200
              px-2 py-3 rounded-md"
            >
              <img
                className="w-8 h-8"
                src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
              />

              <ChevronDown />
            </button>

            {isOpen && (
              <div className="absolute top-16 bg-white shadow-md z-50">
                <Link
                  to={"/user/history"}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  History
                </Link>
                <button 
                  onClick={()=>logout()}
                  className="block px-4 py-2 hover:bg-gray-200">
                  Logout
                </button>
              </div>
            )}
          </div>
            :  <div className="flex items-center gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium "
              }
              to={"/register"}
            >
              Register
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium "
              }
              to={"/login"}
            >
              Login
            </NavLink>
          </div>
          }
         

         





>>>>>>> 5a65e8e532f5442fcc02d0f0f26745e85fce7336
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
