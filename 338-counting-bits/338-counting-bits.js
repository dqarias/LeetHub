/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    // n = 5 
    // iterate 6 times and each iteration convert to bynary i >>> 0
    // sum the numbers of each bynary
    let output = [];
    for(i=0;i<n+1;i++){
        let binarySum = 0;
        let number = i;
        while (number > 0){
            if (number % 2 === 1){
                binarySum++;
            }
            number = Math.floor(number/2)
        }
        output.push(binarySum)
    }
    return output
};