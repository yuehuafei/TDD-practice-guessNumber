'use strict';
//系统给定的数1234,数不允许重复
var systemNum='1234';

function guessNumber(number) {
    var right=0;
    var onlyValueRight=0
    for(var i=0;i<number.length;i++) {
        if (number[i] == systemNum[i]) {
            right++;
        }
        for(var j=0;j<number.length;j++){
            if(i!=j&&number[i]==systemNum[j]){
                onlyValueRight++;
            }
        }
    }
    return right+'A'+onlyValueRight+'B';
}
/*
console.log(guessNumber('5678'));
console.log(guessNumber('4567'));
console.log(guessNumber('3456'));
console.log(guessNumber('4320'));
console.log(guessNumber('4321'));
console.log(guessNumber('1567'));
console.log(guessNumber('1562'));
console.log(guessNumber('1362'));
console.log(guessNumber('1342'));
console.log(guessNumber('1256'));
console.log(guessNumber('1253'));
console.log(guessNumber('1243'));
console.log(guessNumber('1235'));
console.log(guessNumber('1234'));
*/