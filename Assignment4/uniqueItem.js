function unique(arr){
    let unique = [];
    for(let i=0; i< values.length; i++){
        if(unique.indexOf(values[i])=== -1){
            unique.push(values[i]);
        }
    }
    return unique;
} 
let values = ["green", "green", "red", "red", "yellow", "pink", "pink", "yellow"];
let arr=values;

console.log("unique values are:",unique(arr));