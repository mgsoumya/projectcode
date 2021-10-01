let returnGarger = (arr, num) => {
    return arr.map(v => v >= num ? v: "").filter(Boolean)
}

console.log(returnGarger( [ 99,50,100,150,60,99,1000,0,-1,10], 150))