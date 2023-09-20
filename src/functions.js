import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export const generateUUID = () => {
  const uuid = uuidv4();
  return uuid;
};

export const getToday = () => {
  const currentDateTime = dayjs().format("YYYY-MM-DD HH:mm");
  return currentDateTime;
};

export function getRandomNumber(min, max) {
  // min과 max 사이의 임의의 소수를 얻고, 그 소수를 min과 max 사이의 범위로 변환합니다.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
