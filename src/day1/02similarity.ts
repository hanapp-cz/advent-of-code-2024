import { arr1, arr2 } from "./00data.ts";

const similarityScore = arr1.reduce((similarity, locationID) => {
  const locationIDCount = arr2.filter((id) => id === locationID).length;

  const currentSimilarity = locationID * locationIDCount;
  return similarity + currentSimilarity;
}, 0);

console.log(similarityScore);
