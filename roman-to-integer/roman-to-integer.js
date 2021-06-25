/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = function(s) {
    let total = 0
    let num = 0
    while (s.length > 0){
        num = s.charAt(0)
        
        switch(num){
            case 'I':
                if(s.charAt(1) == 'V'){
                    s = s.slice(2)
                    total = total + 4
                } else if (s.charAt(1) == 'X'){
                    s = s.slice(2)
                    total = total + 9
                } else {
                    s = s.slice(1)
                    total = total + 1
                } 
                break;
            case 'V':
                s = s.slice(1)
                total = total + 5;
                break;
            case 'X':
                if(s.charAt(1) == 'L'){
                    s = s.slice(2)
                    total = total + 40
                } else if (s.charAt(1) == 'C'){
                    s = s.slice(2)
                    total = total + 90
                } else {
                    s = s.slice(1)
                    total = total + 10
                } 
                break;
            case 'L':
                s = s.slice(1)
                total = total + 50;
                break;
            case 'C':
                if(s.charAt(1) == 'D'){
                    s = s.slice(2)
                    total = total + 400
                } else if (s.charAt(1) == 'M'){
                    s = s.slice(2)
                    total = total + 900
                } else {
                    s = s.slice(1)
                    total = total + 100
                } 
                break;
            case 'D':
                s = s.slice(1)
                total = total + 500;
                break;
            case 'M':
                s = s.slice(1)
                total = total + 1000;
                break;
            default:
                total = total + 0;
                break
        }    
        console.log(s)
    }
    
    return total;
};