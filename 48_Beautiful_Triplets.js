function beautifulTriplets(d, arr) {
    var counterD = 0
    for (var i = 0; i < (arr.length - 2); i++) {
        console.log(arr[i])
        if (arr.includes(arr[i] + d)) {
            console.log(arr[i] + d)
            //console.log(arr.includes(arr[i] + d))
            if (arr.includes(arr[i] + d + d)) {
                console.log(arr[i] + d + d)
                console.log(arr.includes(arr[i] + d + d))
                counterD++
            }
        }
    }
    return counterD
}

arr = [1, 2, 4, 5, 7, 8, 10]
d = 3
console.log(beautifulTriplets(d, arr))