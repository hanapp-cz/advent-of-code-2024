import { data } from "./00data.ts";

const isSafeReport = (report: number[]) => {
  let i = 0;
  let isSafe = true;

  const levelsCount = report.length;
  const isIncreasing = report[0] - report[1] < 0;

  while (isSafe && i < levelsCount - 1) {
    const diff = report[i] - report[i + 1];
    const isConsistent = isIncreasing ? diff < 0 : diff > 0;
    const isLow = Math.abs(diff) <= 3;

    isSafe = isConsistent && isLow;

    i++;
  }

  return isSafe;
};

const safeCount = data.reduce((count, report) => {
  let i = 0;
  let isSafe = isSafeReport(report);

  while (!isSafe && i < report.length) {
    const reportCopy = [...report];
    reportCopy.splice(i, 1);

    isSafe = isSafeReport(reportCopy);

    i++;
  }

  return isSafe ? count + 1 : count;
}, 0);

console.log(safeCount);
