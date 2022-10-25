/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    
    if(m * n !== original.length) return []
    let result = []
    for(let i = 0; i < original.length; i+=n){
        result.push(original.slice(i, n+i))
    }
    return result 
};