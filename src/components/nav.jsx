import { IoNotifications } from "react-icons/io5";
import { IoCaretDownOutline } from "react-icons/io5";
import person from "../assets/person.png";
function nav() {
  return (
    <div className="flex justify-between rounded-[20px] sticky top-0 bg-white h-[85px] w-[100%] p-4">
      <div className="flex items-center space-x-2">
        <p className="text-[#242424] font-nunito text-lg font-semibold">
          Analytics dashboard
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <IoNotifications size={24} className="text-[#032282]" />
        <img src={person} alt="person" className="w-8 h-8 rounded-full" />
        <div className="flex flex-col">
          <p className="text-[#000] font-nunito text-base font-normal">
            Dexter Olaniyi
          </p>
          <div className="relative flex flex-col">
            <p className="block text-xs  text-[#818181]">
              dexterola@gmail.com
            </p>

          </div>
            <IoCaretDownOutline size={16} className="" />
        </div>
      </div>
    </div>
  );
}

export default nav;
