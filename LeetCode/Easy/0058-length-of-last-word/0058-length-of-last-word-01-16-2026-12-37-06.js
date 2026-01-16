/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let x=s.trim().split(" ")
    console.log(x)
    return x[x.length-1].length
    
};