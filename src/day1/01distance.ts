import { arr1, arr2 } from "./00data.ts";

const sortedArr1 = arr1.sort();
const sortedArr2 = arr2.sort();

const totalDistance = sortedArr1.reduce((distance, locationID, index) => {
  const currentDistance = Math.abs(locationID - sortedArr2[index]);
  return distance + currentDistance;
}, 0);

console.log(totalDistance);
