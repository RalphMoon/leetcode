/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const boughtPrice = prices[i];
    
    for (let j = i + 1; j < prices.length; j++) {
      const selledPrice = prices[j];
      const profit = selledPrice - boughtPrice;
      
      if (profit < 0) break;
      if (profit > maxProfit) maxProfit = profit;
    }
  }
  
  return maxProfit;
};