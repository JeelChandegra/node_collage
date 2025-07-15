function odd_even(a){
    if(a%2==0){
        return "Even"
    }
    else{
        return "odd"
    }
}
function maximaum(a,b){
    if(a>b){
        return "a is big"
    }
    else if(a<b){
        return "b is big"
    }
    else if(a==b){
        return " a and b are equal"
    }
}

function checkLeapYear(year) {

 
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
function SumOfNaturalNum(num){
    let total=0;
    for (let index = 1; index <= num; index++) {
       total+=index
        
    }
    return total

}
function factorial(num) {
    let total=1
    for (let index = num; index > 0; index--) {
        total*=index
        
    }
    return total
}
function  table(num){
    for(let i=1;i<=10;i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }

}
function reverse_number(){
    
}
console.log(table(5));