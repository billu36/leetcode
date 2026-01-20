
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let ans = []

    
    for (let i = 0; i < image.length; i++) {
        let result = []
        for (let j = image[i].length - 1; j >= 0; j--) {
            result.push(image[i][j])
        }
        ans.push(result)
    }

    for (let i = 0; i < ans.length; i++) {
        for (let j = 0; j < ans[i].length; j++) {
            if (ans[i][j] === 1) {
                ans[i][j] = 0
            } else {
                ans[i][j] = 1
            }
        }
    }

    return ans
};
