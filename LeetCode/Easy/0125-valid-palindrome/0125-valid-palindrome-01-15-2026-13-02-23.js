/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()

    let clean = ""
    for (let i = 0; i < s.length; i++) {
        if (
            (s[i] >= 'a' && s[i] <= 'z') ||
            (s[i] >= '0' && s[i] <= '9')
        ) {
            clean = clean + s[i]
        }
    }

    let reversed = ""
    for (let i = clean.length - 1; i >= 0; i--) {
        reversed = reversed + clean[i]
    }
    return clean === reversed
}

    
