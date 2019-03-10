module.exports = function getZerosCount(number, base) {
    
    if (base < 2 || base > 256) return "Incorrect base value - should be 2<= n <=256";
    // console.log(number, base);
    let b = base;
    const factors = {};
    const primNum = [];
    const result = [];
    nextPrime:
    for (let i = 2; i <= base; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
              if (base % i == 0) primNum.push(i); 
    }
    // console.log(primNum);
    for (let i = 0; i < primNum.length; i++) {
        let s = 0;
        let f = primNum[i];
        let pow = 0;
        while (b % f == 0) {
            b = Math.floor(b / f);
            pow++;
        }
        factors[f] = pow;
        for (let j = 1; j <= base;j++) {
            s = s + Math.floor(number / Math.pow(f, j));
            }
        result.push(s / factors[f]);
    }
    // console.log(factors);
    // console.log(result);
    // console.log(Math.floor(Math.min(...result)));
    return Math.floor(Math.min(...result));
}
