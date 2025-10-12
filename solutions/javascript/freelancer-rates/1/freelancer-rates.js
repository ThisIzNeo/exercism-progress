
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  let result = budget / ratePerHour;
  let finalResult = result / 8
  return Math.floor(finalResult);
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let billableDays = Math.floor(numDays / 22);
  let restDays = numDays % 22;
  let monthOfDiscount = 22 * dayRate(ratePerHour);
  let afterDiscount = monthOfDiscount * (1 - discount);
  let discounted = afterDiscount * billableDays;
  const leftOver = restDays * dayRate(ratePerHour);
  const totalProjectCost = discounted + leftOver;
  return Math.ceil(totalProjectCost);
}
