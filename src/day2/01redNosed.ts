import { data } from "./00data.ts";

const safeCount = data.reduce((count, report) => {
  let isSafe = true;
  let i = 0;

  const levelsCount = report.length;
  const isIncreasing = report[0] - report[1] < 0;

  while (isSafe && i < levelsCount - 1) {
    const diff = report[i] - report[i + 1];
    const isConsistent = isIncreasing ? diff < 0 : diff > 0;
    const isLow = Math.abs(diff) <= 3;

    isSafe = isConsistent && isLow;
    i++;
  }

  return isSafe ? count + 1 : count;
}, 0);

console.log(safeCount);
