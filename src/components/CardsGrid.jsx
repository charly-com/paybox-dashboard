import PropTypes from "prop-types";
import { IoEye } from "react-icons/io5";
import rec1 from ".././assets/rec1.png";
import rec2 from ".././assets/rec2.png";
import rec3 from ".././assets/rec2.png";
import { MdArrowDropDown } from "react-icons/md";
import { Menu } from "@headlessui/react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const cardsData = [
  // Card 1
  {
    bg: "bg-[#032282]",
    size: 1,
    h: "h-[100%]",
    content: (
      <>
        <div className="w-full flex flex-col items-center justify-center relative">
          <div className="flex absolute right-6 -translate-y-4 top-0">
            <img src={rec1} aria-label="card1" />
            <img src={rec2} aria-label="card2" />
          </div>
          <div className="w-11/12 flex flex-col items-center">
            <h2 className="text-[#CDCDCD] w-full">Wallet Balance</h2>
            <div className="flex items-center w-full">
              <span className="text-[#FFFFFF] text-[20px] font-semibold mr-2">
                ₦50,000.00
              </span>
              <IoEye size={24} className="text-[#FFFFFF] " />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex w-11/12 mt-4 justify-between gap-4">
            <button className="bg-[#FFFFFF26] w-full text-white py-2 rounded">
              Add Funds
            </button>
            <button className="bg-[#FFFFFF26] w-full text-white py-2 rounded">
              Withdraw
            </button>
          </div>
          <img
            src={rec3}
            aria-label="card3"
            className="absolute translate-x-[110px] translate-y-[30px]"
          />
        </div>
      </>
    ),
  },
  // Card 2 (and others with similar structure)
  {
    bg: "bg-[#FFF]",
    size: 1,
    h: "h-[100%]",
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex flex-col gap-4 items-center justify-center rounded-lg">
          <h2 className="text-[#4F64A7] w-11/12 pt-4 font-lining-nums font-sora text-base font-normal leading-[15px] tracking-[0.16px]">
            Total savings balance
          </h2>
          <p className="text-[#032282] w-11/12 pb-2 font-lining-nums font-sora text-xl font-semibold leading-[31px] tracking-[1.16px]">
            ₦194,000
          </p>
        </div>
        <div className="flex flex-col items-center w-full justify-center">
          <div className="bg-white rounded-b-lg flex w-11/12 items-center mt-2">
            <p className="text-[#032282]  font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              View details
            </p>
            <MdOutlineKeyboardDoubleArrowRight
              size={24}
              className="text-[#032282] text-xs opacity-30"
            />
          </div>
        </div>
      </>
    ),
  },
  // card 3
  {
    bg: "bg-[#FFF]",
    size: 1,
    h: "h-[100%]",
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex flex-col gap-4 items-center justify-center rounded-lg">
          <h2 className="text-[#4F64A7] w-11/12 pt-4 font-lining-nums font-sora text-base font-normal leading-[15px] tracking-[0.16px]">
            Total customers
          </h2>
          <p className="text-[#032282] w-11/12 pb-2 font-lining-nums font-sora text-xl font-semibold leading-[31px] tracking-[1.16px]">
            ₦919
          </p>
        </div>
        <div className="flex flex-col items-center w-full justify-center">
          <div className="bg-white rounded-b-lg flex w-11/12 items-center mt-2">
            <p className="text-[#032282]  font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              View details
            </p>
            <MdOutlineKeyboardDoubleArrowRight
              size={24}
              className="text-[#032282] text-xs opacity-30"
            />
          </div>
        </div>
      </>
    ),
  },
  // card 4
  {
    bg: "bg-[#FFF]",
    size: 1,
    h: "h-[100%]",
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex flex-col gap-4 items-center justify-center rounded-lg">
          <h2 className="text-[#4F64A7] w-11/12 pt-4 font-lining-nums font-sora text-base font-normal leading-[15px] tracking-[0.16px]">
            Total POS
          </h2>
          <p className="text-[#032282] w-11/12 pb-2 font-lining-nums font-sora text-xl font-semibold leading-[31px] tracking-[1.16px]">
            0
          </p>
        </div>
        <div className="flex flex-col items-center w-full justify-center">
          <div className="bg-white rounded-b-lg flex w-11/12 items-center mt-2">
            <p className="text-[#032282]  font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              View details
            </p>
            <MdOutlineKeyboardDoubleArrowRight
              size={24}
              className="text-[#032282] text-xs opacity-30"
            />
          </div>
        </div>
      </>
    ),
  },
  // card 5
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex-col items-center justify-center rounded-lg h-full flex gap-2 py-4">
          <div className="flex  justify-between w-11/12 ">
            <h2 className="text-[#4F64A7] w-full font-nums flex items-center font-nunito text-[15px] font-normal leading-[15px] tracking-[0.16px]">
              Total transfer
            </h2>

            <Menu as="div" className=" ">
              <div>
                <Menu.Button className="inline-flex w-20 h-8 items-center justify-center  rounded-md bg-[#EAF4FF]  text-xs font-normal text-[#032282]">
                  More
                  <MdArrowDropDown
                    className="-mr-1 h-5 w-5 text-[#032282]"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
          <div className="flex flex-col items-center justify-center w-11/12 gap-3">
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Today
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦500
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Yesterday
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦200
                </p>
              </div>
            </div>
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  This week
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦500
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Last week
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦200
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // card 6
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex-col items-center justify-center rounded-lg h-full flex gap-3 py-4">
          <div className="flex  justify-between w-11/12 ">
            <h2 className="text-[#4F64A7] w-full font-nums flex items-center font-nunito text-[15px] font-normal leading-[15px] tracking-[0.16px]">
              Total inflow
            </h2>

            <Menu as="div" className=" ">
              <div>
                <Menu.Button className="inline-flex w-20 h-8 items-center justify-center  rounded-md bg-[#EAF4FF]  text-xs font-normal text-[#032282]">
                  More
                  <MdArrowDropDown
                    className="-mr-1 h-5 w-5 text-[#032282]"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
          <div className="flex flex-col items-center justify-center w-11/12 gap-3">
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Today
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦2,000,000
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Yesterday
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦5,000,000
                </p>
              </div>
            </div>
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  This week
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦2,000,000
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Last week
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦5,000,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // card 7
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex-col items-center justify-center rounded-lg h-full flex gap-3 py-4">
          <div className="flex  justify-between w-11/12 ">
            <h2 className="text-[#4F64A7] w-full font-nums flex items-center font-nunito text-[15px] font-normal leading-[15px] tracking-[0.16px]">
              Total transactions
            </h2>

            <Menu as="div" className=" ">
              <div>
                <Menu.Button className="inline-flex w-20 h-8 items-center justify-center  rounded-md bg-[#EAF4FF]  text-xs font-normal text-[#032282]">
                  More
                  <MdArrowDropDown
                    className="-mr-1 h-5 w-5 text-[#032282]"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
          <div className="flex flex-col items-center justify-center w-11/12 gap-3">
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Today
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦2,000,000
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Yesterday
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦5,000,000
                </p>
              </div>
            </div>
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  This week
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦2,000,000
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Last week
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦5,000,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // card 8
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex-col items-center justify-center rounded-lg h-full flex gap-3 py-4">
          <div className="flex  justify-between w-11/12 ">
            <h2 className="text-[#4F64A7] w-full font-nums flex items-center font-nunito text-[15px] font-normal leading-[15px] tracking-[0.16px]">
              Transaction count
            </h2>

            <Menu as="div" className=" ">
              <div>
                <Menu.Button className="inline-flex w-20 h-8 items-center justify-center  rounded-md bg-[#EAF4FF]  text-xs font-normal text-[#032282]">
                  More
                  <MdArrowDropDown
                    className="-mr-1 h-5 w-5 text-[#032282]"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
          <div className="flex flex-col items-center justify-center w-11/12 gap-3">
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Today
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦2,000,000
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Yesterday
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦5,000,000
                </p>
              </div>
            </div>
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  This week
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦2,000,000
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Last week
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦5,000,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // card 9
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex-col items-center justify-center rounded-lg h-full flex gap-5 py-3">
          <div className="flex  justify-between w-11/12 ">
            <h2 className="text-[#4F64A7] w-full font-nums flex items-center font-nunito text-[15px] font-normal leading-[15px] tracking-[0.16px]">
              Total Cashout
            </h2>

            <Menu as="div" className=" ">
              <div>
                <Menu.Button className="inline-flex w-20 h-8 items-center justify-center  rounded-md bg-[#EAF4FF]  text-xs font-normal text-[#032282]">
                  Today
                  <MdArrowDropDown
                    className="-mr-1 h-5 w-5 text-[#032282]"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
          <div className="flex flex-col items-center justify-center w-11/12 gap-3">
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Today
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦1,200,000
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Yesterday
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦1,200,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // card 10
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex-col items-center justify-center rounded-lg h-full flex gap-5 py-3">
          <div className="flex  justify-between w-11/12 ">
            <h2 className="text-[#4F64A7] w-full font-nums flex items-center font-nunito text-[15px] font-normal leading-[15px] tracking-[0.16px]">
              Transaction status
            </h2>

            <Menu as="div" className=" ">
              <div>
                <Menu.Button className="inline-flex w-20 h-8 items-center justify-center  rounded-md bg-[#EAF4FF]  text-xs font-normal text-[#032282]">
                  Today
                  <MdArrowDropDown
                    className="-mr-1 h-5 w-5 text-[#032282]"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
          <div className="flex flex-col items-center justify-center w-11/12 gap-3">
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] flex  font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      marginRight: "4px",
                      flexShrink: 0,
                      borderRadius: "100px",
                      background: "#18A201",
                    }}
                  ></div>{" "}
                  Successful
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  422
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums flex font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      marginRight: "4px",
                      flexShrink: 0,
                      borderRadius: "100px",
                      background: "#FF0000",
                    }}
                  ></div>{" "}
                  Failed
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  18
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // card 11
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex-col items-center justify-center rounded-lg h-full flex gap-5 py-3">
          <div className="flex  justify-between w-11/12 ">
            <h2 className="text-[#4F64A7] w-full font-nums flex items-center font-nunito text-[15px] font-normal leading-[15px] tracking-[0.16px]">
              Average transaction Count
            </h2>

            <Menu as="div" className=" ">
              <div>
                <Menu.Button className="inline-flex w-20 h-8 items-center justify-center  rounded-md bg-[#EAF4FF]  text-xs font-normal text-[#032282]">
                  Today
                  <MdArrowDropDown
                    className="-mr-1 h-5 w-5 text-[#032282]"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
          <div className="flex flex-col items-center justify-center w-11/12 gap-3">
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Value
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦20,400
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Count
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  422
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // card 12
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex-col items-center justify-center rounded-lg h-full flex gap-5 py-3">
          <div className="flex  justify-between w-11/12 ">
            <h2 className="text-[#4F64A7] w-full font-nums flex items-center font-nunito text-[15px] font-normal leading-[15px] tracking-[0.16px]">
              Total commission
            </h2>

            <Menu as="div" className=" ">
              <div>
                <Menu.Button className="inline-flex w-20 h-8 items-center justify-center  rounded-md bg-[#EAF4FF]  text-xs font-normal text-[#032282]">
                  Today
                  <MdArrowDropDown
                    className="-mr-1 h-5 w-5 text-[#032282]"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
          <div className="flex flex-col items-center justify-center w-11/12 gap-3">
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  POS commission
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦87,000
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Lotto commission
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦102,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // card 13
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
        <div className="bg-[#F6FAFF] w-full flex-col items-center justify-center rounded-lg h-full flex gap-5 py-3">
          <div className="flex  justify-between w-11/12 ">
            <h2 className="text-[#4F64A7] w-full font-nums flex items-center font-nunito text-[15px] font-normal leading-[15px] tracking-[0.16px]">
            Average commission per transaction
            </h2>

            <Menu as="div" className=" ">
              <div>
                <Menu.Button className="inline-flex w-20 h-8 items-center justify-center  rounded-md bg-[#EAF4FF]  text-xs font-normal text-[#032282]">
                  Today
                  <MdArrowDropDown
                    className="-mr-1 h-5 w-5 text-[#032282]"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
          <div className="flex flex-col items-center justify-center w-11/12 gap-3">
            <div className="bg-[#F6FAFF] w-full self-start rounded-b-lg flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  POS commission
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦500
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#4F64A7] font-nums font-nunito text-xs font-normal leading-[15px] tracking-[0.16px]">
                  Lotto commission
                </p>
                <p className="text-[#032282] font-nums font-sora text-[0.9em] font-semibold leading-[31px] tracking-[1.16px]">
                  ₦200
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // card 14
  {
    bg: "bg-[#FFF]",
    size: 1,
    h: "h-[100%]",
    content: (
      <div>
        <div className="bg-[#F6FAFF] p-4 rounded-t-lg flex justify-between">
          <h2 className="text-lg font-semibold ">Title</h2>
          <p className="font-semibold">More</p>
        </div>
        <div className="bg-[#F6FAFF] p-4 rounded-b-lg flex justify-between">
          <div className="flex flex-col">
            <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              <p>Today</p>
              <p>500</p>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              <p>Yesterday</p>
              <p>500</p>
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const Card = ({ bg, size, content, h }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${h} ${bg} ${size} `}>
      {content}
    </div>
  );
};

const CardsGrid = () => {
  return (
    <div className="overflow-auto min-h-screen">
      <div className="px-10 py-5 h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            bg={card.bg}
            size={card.size}
            content={card.content}
            h={card.h}
          />
        ))}
      </div>
    </div>
  );
};

Card.propTypes = {
  bg: PropTypes.string.isRequired, // Validate that 'bg' is a string and is required
  size: PropTypes.number.isRequired, // Validate that 'size' is a number and is required
  content: PropTypes.node.isRequired, // Validate that 'content' is a React node and is required
  h: PropTypes.string, // Validate that 'h' is a number
};
export default CardsGrid;
