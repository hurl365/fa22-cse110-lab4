1. 3 is outputted on the console.
   Line 12 prints the final value of i. i is the loop control variable for the for-loop from line 6 to line 10, and the terminating condition for the for-loop is when i is greater or equal to prices.length, which is equal to 3. Therefore, the final value of i will be incremented to 3 to satisfy the terminating condition of the for-loop, and 3 is outputted on the console on line 12.
2. 150 is oututted on the console.
   The function prints the value of variable discountedPrice after the for-loop, while the latest value of discountedPrice is calculated as princes[2] * (1 - discount), which is equal to 300*(1-0.5) = 300*0.5 = 150.
3. 150 is oututted on the console.
   The function prints the value of variable finalPrice after the for-loop, while the latest value of finalPrice is calculated by Math.round(discountedPrice * 100) / 100. As previously mentioned in the response to question 2, discountedPrice is calculated as 150 in the last iteration of the for-loop. Therefore, finalPrice is calculated by Math.round(150 * 100) / 100, which is equal to 150.
4. The array of the discounted prices, [ 50, 100, 150 ] in this case, each calculated by multiplying the original price by one minus the discount rate, which is the last argument of this function, is returned by the function.
   The for-loop in the function interates through all elements in the array, passed into this function as the first element, solve for their discounted price individually, and push the calculated values to the "discounted" array. Therefore, the "discounted" array will keep track of all the calculated prices, which will be returned by the function discountPrices().
5. ReferenceError: i is not defined
   This is because i is declared and defined using let instead of var, so it is only valid in the scope where it is declared in. When the for-loop ends, the reference to i is lost, so an error occurs.
6. ReferenceError: discountPrice is not defined
   Similarly, the error occurs because the reference to discountPrice is lost after the for-loop terminates. discountPrice is declared and defined using let instead of var inside the for-loop, so it becomes unreachable after the for-loop.
7. 150
   Similar to the result in question 2, the value of finaPrice at the end of the for-loop is determined by the value of other variables in the last iteration of the loop. In the last iteration, i is equal to 2, and princes[2] becomes 300. Therefore, discountedPrice becomes 150. After applying Math.round() on 100 times 150 and divide the result by 100, the value of finalPrice becomes 150 in the end and is printed onto the console.
8. The function will return [ 50, 100, 150 ], which is the array of all discounted price after the calculations.
   Similar to the reason explained in the response to question 4, the array discounted keeps track of all the resultant prices determined by the input prices and the discount rate. The for loop iterates through all the prices listed in the first argument, and the function firgures out the discounted price using he equations represented by the expressions within the for-loop. All the discounted prices are being pushed onto the array discounted, which is returned by the function.
9. ReferenceError: i is not defined
    Similarly to question 5, i is declared and defined using let instead of var within the for-loop, so it is only valid in the scope where it is declared in. When the for-loop ends, the reference to i is lost, so an error occurs.
10. 3 is printed on the console.
    const variable length is recording the length of the input array prices, which has three elements in there, so 3 becomes the length of the array and is  consequently assigned to variable length.
11. This function retunrs the the array of the discounted prices,[ 50, 100, 150 ] for the invocation on line 17. 
    The function uses a for-loop to iterate through the elements in the input prices array, which contains the original prices, solves for the discounted price in the definition of the variable discountedPrice, which is being pushed onto the array discounted. Since the array discounted is declared outside of the for-loop, it is still reachable when it is returned. Also, even though the array discounted was declared as a const type, only its reference has to remain unchanges, but it is acceptable to change the elements in it, so it will not cause an error.
12. 
   A. student.name
   B. student['Grad Year']
   C. student.greeting();
   D. student['Favorite Teacher'].name
   E. student.courseLoad[0]
13. 
   A. 32
   B. 1
   C. 3
   D. 3null
   E. 4
   F. 0
   G. 3undefined
   H. NaN
14. 
   A. true
   B. false
   C. true
   D. false
   E. false
   F. true
15. Double equal sign, ==, performs the regular equality check, which allows conversions between types. However, triple equal sign, ===, performs the strict equality checks, which will always produce false when types are different and no conversion takes place in this process.
16. (in part2-question16.js)
17. 