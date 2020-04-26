
/*
 * 编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。
 * https://leetcode-cn.com/problems/permutation-i-lcci/
 */

var permutation = function(S) {
    var vs = S.split('')
    var res = []
    function swap(s, i, j) {
        var temp = s[i]
        s[i] = s[j]
        s[j] = temp
    }
    function arrangement(s, i) {
        if (i == s.length-1) {
            var str = ''
            for (var c of s) {
                str += c
            }
            res.push(str)
            return
        }
        for (var j = i ; j < s.length; j++) {
            swap(s,i,j)
            arrangement(s, i+1)
            swap(s,i,j)
        }
    }

    arrangement(vs, 0)
    return res

};


/*
var s = 'abc'
console.log(permutation(s))
Array(6) ["abc", "acb", "bac", "bca", "cba", "cab"]
*/

//动态规划
var permutation_b = function(S) {
    var res = [S[0]]
    for (var i = 1; i < S.length; i++) {
        var key = S[i]
    }
    console.log(res)
}
permutation_b('abc')
// var s = 'abc'
// var b = s.substr(1,1)
// for (var i = 0; i <= s.length; i++) {
//     var n = s.substr(0,i) + 'q' + s.substr(i,s.length)
//     console.log(n)
// }






