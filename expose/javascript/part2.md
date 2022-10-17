1. 3 is outputted on the console.
   Line 12 prints the final value of i. i is the loop control variable for the for-loop from line 6 to line 10, and the terminating condition for the for-loop is when i is greater or equal to prices.length, which is equal to 3. Therefore, the final value of i will be incremented to 3 to satisfy the terminating condition of the for-loop, and 3 is outputted on the console on line 12.
2. 150 is oututted on the console.
   The function prints the value of variable discountedPrice after the for-loop, while the latest value of discountedPrice is calculated as princes[2] * (1 - discount), which is equal to 300*(1-0.5) = 300*0.5 = 150.
3. 150 is oututted on the console.
   The function prints the value of variable finalPrice after the for-loop, while the latest value of finalPrice is calculated by Math.round(discountedPrice * 100) / 100. As previously mentioned in the response to question 2, discountedPrice is calculated as 150 in the last iteration of the for-loop. Therefore, finalPrice is calculated by Math.round(150 * 100) / 100, which is equal to 150.
4. The array of the discounted prices, each calculated by multiplying the original price by one minus the discount rate, which is the last argument of this function, is returned by the function.
   The for-loop in the function interates through all elements in the array, passed into this function as the first element, solve for their discounted price individually, and push the calculated values to the "discounted" array. Therefore, the "discounted" array will keep track of all the calculated prices, which will be returned by the function discountPrices().
5. ReferenceError: i is not defined
6. ReferenceError: discountPrice is not defined
7. 150
   