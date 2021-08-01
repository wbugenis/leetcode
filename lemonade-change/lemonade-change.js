/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let cash={"5":0, "10":0}
    for(let i = 0; i< bills.length; i++){
        if(bills[i]===20){
            if(cash["10"] > 0 && cash["5"] > 0){
                cash["10"]-=1
                cash["5"]-=1
            } else if(cash["5"]>2){
                cash["5"]-=3
            } else {
                return false
            }
        } else if(bills[i]===10){
            if(cash["5"] > 0){
                cash["5"]-=1
            } else {
                return false
            }
            cash["10"]+=1
        } else {
            cash["5"]+=1
        }
    }
    return true
};