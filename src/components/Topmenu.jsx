import React from "react";
import { defaultTopMenuColor } from "../constColors";
import { defaultMaxWidth } from "../constSizes";
import {
  AiOutlineHome,
  AiOutlineSchedule,
  AiOutlineContacts,
} from "react-icons/ai";
import { PiUsersFourLight } from "react-icons/pi";
import { Tooltip } from "antd";
import { gray } from "@ant-design/colors";
const menus = [
  { id: 1, title: "홈", icon: <AiOutlineHome />, tooltip: "홈으로" },
  { id: 2, title: "예약", icon: <AiOutlineSchedule />, tooltip: "예약현황" },
  { id: 3, title: "고객", icon: <AiOutlineContacts />, tooltip: "고객명부" },
  {
    id: 4,
    title: "스태프",
    icon: <PiUsersFourLight />,
    tooltip: "구성원(직원)",
  },
];

const Topmenu = () => {
  return (
    <div
      className="h-full w-full flex justify-center items-center"
      style={{ backgroundColor: defaultTopMenuColor }}
    >
      <div
        className="flex w-full text-gray-100 justify-center items-center h-full"
        style={{ maxWidth: defaultMaxWidth }}
      >
        <div className="flex w-1/4 justify-start items-center">
          <div className="flex flex-col w-full justify-center items-start">
            <div className="flex justify-center w-24">
              <span
                className="font-bold text-2xl"
                style={{ fontFamily: "Poppins" }}
              >
                Lincone
              </span>
            </div>
            <div className="flex justify-center w-24">
              <span className="text-lg italic">for Shop</span>
            </div>
          </div>
        </div>
        <div className="flex w-2/4 h-full items-center ">
          <div className="flex w-full justify-around items-center h-full ">
            {menus.map((menu, mIdx) => {
              const { id, title, icon, tooltip } = menu;
              return (
                <Tooltip placement="bottom" title={tooltip} color={gray[5]}>
                  <div className="flex w-12 h-12 justify-center items-center">
                    <button className="hover:bg-gray-900 w-full h-full flex justify-center items-center rounded-lg">
                      <span className="text-3xl text-gray-300">{icon}</span>
                    </button>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
        <div className="flex w-1/4"></div>
      </div>
    </div>
  );
};

export default Topmenu;
