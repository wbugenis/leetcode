/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = ""
    if (x < 0){
        x = Math.abs(x)
        rev+= '-'
    }
    console.log(x) 
    if( x >= 2147483646){
        return 0
    }
    
    let str = x.toString()
   
    for(let i = str.length-1; i >= 0 ; i--){
        rev += str[i]
    }
    
    if( Math.abs(parseInt(rev)) >= 2147483646){
        return 0
    }
    
    return rev
};