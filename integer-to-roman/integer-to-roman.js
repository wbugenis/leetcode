/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = ''
    let count = 0
    if(num >= 1000){
        count = Math.floor(num/1000)
        num -= count * 1000
        for(let i = 0; i < count; i++){
            roman += 'M'
        }
    }
    if(num >= 900){
        num -= 900
        roman += 'CM'
    }
    if(num >= 500){
        num -= 500
        roman += 'D'
    }
    if(num >= 400){
        num -= 400
        roman += 'CD'
    }
    if(num >= 100){
        count = Math.floor(num/100)
        num -= count * 100
        for(let i = 0; i < count; i++){
            roman += 'C'
        }
    }
    if(num >= 90){
        num -= 90
        roman += 'XC'
    }
    if(num >= 50){
        num -= 50
        roman += 'L'
    }
    if(num >= 40){
        num -= 40
        roman += 'XL'
    }
    if(num >= 10){
        count = Math.floor(num/10)
        num -= count * 10
        for(let i = 0; i < count; i++){
            roman += 'X'
        }
    }
    if(num >= 9){
        num -= 9
        roman += 'IX'
    }
    if(num >= 5){
        num -= 5
        roman += 'V'
    }
    if(num >= 4){
        num -= 4
        roman += 'IV'
    }
    if(num > 0){
        for(let i = 0; i < num; i++){
            roman += 'I'
        }
    }
    
    return roman
};