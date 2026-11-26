function numtype(num){
    if (num >0){
        return "postive number"
    }
    else if (num <0){
        return " negative number"
    }
    else{
        return "zero"
    }
}
let num = -8
console.log(numtype(num))