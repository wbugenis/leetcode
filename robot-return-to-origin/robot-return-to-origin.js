/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let pos = [0,0]
    for(let i = 0; i < moves.length; i++){
        switch(moves[i]){
            case 'U':
                pos[1]+=1
                break;
            case 'D':
                pos[1]-=1
                break;
            case 'L':
                pos[0]+=1
                break;
            case 'R':
                pos[0]-=1
                break;
        }
    }
    if(pos[0] !== 0 || pos[1] !== 0){
        return false
    } else {
        return true
    }
};