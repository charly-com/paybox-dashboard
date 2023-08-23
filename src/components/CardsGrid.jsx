import PropTypes from "prop-types";
import { IoEye } from "react-icons/io5";
import rec1 from '.././assets/rec1.png'
import rec2 from '.././assets/rec2.png'
import rec3 from '.././assets/rec2.png'
// import { HiOutlineChevronRight } from "react-icons/hi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

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
            <img src={rec1} aria-label="card1"/>
            <img src={rec2} aria-label="card2"/>
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
            <button
              className="bg-[#FFFFFF26] w-full text-white py-2 rounded"
            >
              Add Funds
            </button>
            <button
              className="bg-[#FFFFFF26] w-full text-white py-2 rounded"
            >
              Withdraw
            </button>
          </div>
          <img src={rec3} aria-label="card3" className="absolute translate-x-[110px] translate-y-[30px]"/>
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
        <div className="bg-[#F6FAFF]  rounded-t-lg">
          <h2 className="text-[#4F64A7] font-semibold">Total customers</h2>
          <p className="text-[#032282]">₦919</p>
        </div>
        <div className="bg-white p-4 rounded-b-lg flex justify-between">
          <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
            View details
          </p>
          <MdOutlineKeyboardDoubleArrowRight
            size={24}
            className="text-[#032282]  h-6 w-6 opacity-30"
          />
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
        <div className="bg-[#F6FAFF] rounded-t-lg">
          <h2 className="text-[#4F64A7] font-semibold">Total POS</h2>
          <p className="">0</p>
        </div>
        <div className="bg-white p-4 rounded-b-lg flex justify-between">
          <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
            View details
          </p>
          <MdOutlineKeyboardDoubleArrowRight
            size={24}
            className="text-[#032282]  h-6 w-6 opacity-30"
          />
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
        <div className="bg-[#F6FAFF] p-4 rounded-b-lg flex justify-between">
          <div className="flex flex-col">
            <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              <p>This week</p>
              <p>500</p>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              <p>Last week</p>
              <p>500</p>
            </p>
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
        <div className="bg-[#F6FAFF] p-4 rounded-b-lg flex justify-between">
          <div className="flex flex-col">
            <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              <p>This week</p>
              <p>500</p>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              <p>Last week</p>
              <p>500</p>
            </p>
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
        <div className="bg-[#F6FAFF] p-4 rounded-b-lg flex justify-between">
          <div className="flex flex-col">
            <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              <p>This week</p>
              <p>500</p>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              <p>Last week</p>
              <p>500</p>
            </p>
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
        <div className="bg-[#F6FAFF] p-4 rounded-b-lg flex justify-between">
          <div className="flex flex-col">
            <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              <p>This week</p>
              <p>500</p>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#032282] font-nunito font-normal text-xs leading-[15px] tracking-[0.16px]">
              <p>Last week</p>
              <p>500</p>
            </p>
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
      </>
    ),
  },
  // card 10
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
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
      </>
    ),
  },
  // card 11
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
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
      </>
    ),
  },
  // card 12
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
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
      </>
    ),
  },
  // card 13
  {
    bg: "bg-[#FFF]",
    size: 1,
    content: (
      <>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
  );
};

Card.propTypes = {
  bg: PropTypes.string.isRequired, // Validate that 'bg' is a string and is required
  size: PropTypes.number.isRequired, // Validate that 'size' is a number and is required
  content: PropTypes.node.isRequired, // Validate that 'content' is a React node and is required
  h: PropTypes.string, // Validate that 'h' is a number
};
export default CardsGrid;
