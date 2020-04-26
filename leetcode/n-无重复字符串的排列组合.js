
/*
 * 编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。
 * https://leetcode-cn.com/problems/permutation-i-lcci/
 */

var permutation = function(S) {

    for (var l = 1; l <= S.length; l++) {
        for (var i = 0; i < S.length-l; i++) {
            var j = i+l
            console.log(i,j)
        }
    }

};

var s = 'abc'
permutation(s)