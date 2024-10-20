module.exports = function toReadable(number) {
    const one = ["zero","one","two","three","four","five","six","seven","eight","nine",];
    const teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen",];
    const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety",];
    const hundreds = "hundred";
    const tenB = Math.floor(number / 10);
    const NumberC = (number % 10 );
    const hundredR = (number % 100);
    const hundred = Math.floor(number / 100);
if (number < 10) {
     return(one[number])

}else if(number < 20) {
    return(teens[number - 10])
}else if (number <100){
    return tens[tenB] + (NumberC ? " " + one[NumberC] : "")

}  else if (number < 1000){
return one[hundred] + " " + 'hundred' + (hundredR ? " " + toReadable(hundredR) : "" ) 
};

}
 