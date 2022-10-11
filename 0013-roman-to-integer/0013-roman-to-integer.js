/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    // III
    let ans = 0;
    for(let i = s.length -1 ; i >= 0 ; i--){
        let num = roman[s.charAt(i)]
        console.log(num)
      if (4 * num < ans) ans -= num
        else ans += num

    }
    return ans
};