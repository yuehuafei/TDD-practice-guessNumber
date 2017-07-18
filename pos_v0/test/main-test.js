'use strict';
//假设系统给出的值为‘1234’
describe('pos', () => {

  it('所有数字都不对，,should return 0A0B', () => {
   let num='5678';
   const actualResult=guessNumber(num);
   let expectedResult = '0A0B';
   expect(actualResult).toEqual(expectedResult);
  });
  it('只有一个数字值相符，但位置不对，,should return 0A1B', () => {
      let num='4567';
      const actualResult=guessNumber(num);
      let expectedResult = '0A1B';
      expect(actualResult).toEqual(expectedResult);
  });
  it('只有两个数字值相符，但位置不对，,should return 0A2B', () => {
      let num='3456';
      const actualResult=guessNumber(num);
      let expectedResult = '0A2B';
      expect(actualResult).toEqual(expectedResult);
  });
  it('只有三个数字值相符，但位置不对，,should return 0A3B', () => {
      let num='4320';
      const actualResult=guessNumber(num);
      let expectedResult = '0A3B';
      expect(actualResult).toEqual(expectedResult);
  });
  it('所有数字值相符，但位置不对，,should return 0A4B', () => {
      let num='4321';
      const actualResult=guessNumber(num);
      let expectedResult = '0A4B';
      expect(actualResult).toEqual(expectedResult);
  });
  it('只猜对一个数，其余都不对,should return 1A0B', () => {
      let num='1567';
      const actualResult=guessNumber(num);
      let expectedResult = '1A0B';
      expect(actualResult).toEqual(expectedResult);
  });
  it('只猜对一个数和其中一个数的值，其余都不对，,should return 1A1B', () => {
      let num='1562';
      const actualResult=guessNumber(num);
      let expectedResult = '1A1B';
      expect(actualResult).toEqual(expectedResult);
  });
  it('只猜对一个数和其中两个数的值，其余都不对，,should return 1A2B', () => {
      let num='1362';
      const actualResult=guessNumber(num);
      let expectedResult = '1A2B';
      expect(actualResult).toEqual(expectedResult);
  });
  it('只猜对一个数和其中三个数的值，其余都不对，,should return 1A3B', () => {
      let num='1342';
      const actualResult=guessNumber(num);
      let expectedResult = '1A3B';
      expect(actualResult).toEqual(expectedResult);
  });
    it('只猜对两个数，其余都不对，,should return 2A0B', () => {
        let num='1256';
        const actualResult=guessNumber(num);
        let expectedResult = '2A0B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('只猜对两个数和一个数的值，其余都不对，,should return 2A1B', () => {
        let num='1253';
        const actualResult=guessNumber(num);
        let expectedResult = '2A1B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('只猜对两个数和两个数的值，其余都不对，,should return 2A2B', () => {
        let num='1243';
        const actualResult=guessNumber(num);
        let expectedResult = '2A2B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('只猜对三个数，其余都不对，,should return 3A0B', () => {
        let num='1235';
        const actualResult=guessNumber(num);
        let expectedResult = '3A0B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('全部猜对，,should return 4A0B', () => {
        let num='1234';
        const actualResult=guessNumber(num);
        let expectedResult = '4A0B';
        expect(actualResult).toEqual(expectedResult);
    });
});
