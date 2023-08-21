import Nav from "./nav";
import { IoEye } from "react-icons/io5";

function main() {
  return (
    <div className="rounded-[20px] bg-[#F8F9FB] h-full w-full">
      <Nav />
      <div className="bg-[#032282] h-[18%] w-[22%] rounded-lg p-4">
        <div className="flex items-center">
          <p className="text-white font-nunito text-sm font-semibold ">
            Wallet Balance:
          </p>
          <div className="relative">
            <p className="text-white font-nunito text-sm font-semibold">
              56,000.00
            </p>
            <IoEye size={16} className="text-white " />
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button className="bg-[#192749] text-[#FFF] px-4 py-2 rounded-lg">
            Add Fund
          </button>
          <button className="bg-[#192749] text-[#FFF] px-4 py-2 rounded-lg">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default main;
