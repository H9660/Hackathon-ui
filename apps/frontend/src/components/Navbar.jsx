import { FaHome, FaThLarge, FaComments, FaUsers, FaBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-white shadow-md p-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">SimpliTrain</div>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="What would you like to learn?"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 text-gray-500">
        <FaHome className="cursor-pointer hover:text-black" />
        <FaThLarge className="cursor-pointer hover:text-black" />
        <FaComments className="cursor-pointer hover:text-black" />
        <FaUsers className="cursor-pointer hover:text-black" />
        <FaBell className="cursor-pointer hover:text-black" />

        {/* Profile Menu (Optional) */}
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
          <span className="text-xs">🔘</span>
        </div>
      </div>
    </div>
  );
}
