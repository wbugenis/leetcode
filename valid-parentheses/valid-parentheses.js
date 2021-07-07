/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let brackStack = []
    let last = 0
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] ==='[' || s[i] ==='{'){
            brackStack.push(s[i])
        }
        last = brackStack.length-1
        
        if(s[i] === ')'){
            if(brackStack[last] !== '('){
                return false
            } else {
                brackStack.pop()
            }
        }
        
        if(s[i] === '}'){
            if(brackStack[last] !== '{'){
                return false
            } else {
                brackStack.pop()
            }
        }
        
        if(s[i] === ']'){
            if(brackStack[last] !== '['){
                return false
            } else {
                brackStack.pop()
            }
        }
    }
    
    if(brackStack.length === 0){
        return true
    } else {
        return false
    }

};