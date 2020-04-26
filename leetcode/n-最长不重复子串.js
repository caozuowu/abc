


function find(s) {

    var mark = new Array(s.length)
    for (var x = 0; x < mark.length; x++) {
        mark[x] = 1
    }

    var character = {}
    character[s[0]] = 0
    var max = [{l:1, f:0}]

    for (var i = 1; i < s.length; i++) {
        if (s[i] != s[i-1]) {
            var count = mark[i-1] + 1
            if (character[s[i]]) {
                var cut = i - character[s[i]]
                mark[i] = Math.min(cut, count);
            }else {
                mark[i] = count
            }
        }else {
            mark[i] = 1
        }
        character[s[i]] = i
        if (max[0].l < mark[i]) {
            max = [{l: mark[i], f:i}]
        }else if (max[0].l == mark[i]) {
            max.push({ l: mark[i], f: i })
        }
    }

    var res = []
    for (var i = 0; i < max.length; i++) {
        res.push(s.substring(max[i].f+1-5,max[i].f+1))
    }
    console.log(JSON.stringify(mark))
    console.log(JSON.stringify(max))
    console.log(res)
    return res
}
"abcabcbb"
// var r = find('character')
var r = find('abcabcbb')
/*
[1,2,3,4,2,3,4,5,5]
[{"l":5,"f":7},{"l":5,"f":8}]
["racte", "acter"]
*/
