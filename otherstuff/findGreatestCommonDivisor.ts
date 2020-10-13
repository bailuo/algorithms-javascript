function isCoprime(num1: number, num2:number):Boolean {
    let bigNumber = num1 > num2 ? num1 : num2;
    let smallNumber = bigNumber === num1 ? num2 : num1;
    let curr: number  = 2;
    for(curr; curr <= smallNumber / 2 ; curr ++ ){
        if(bigNumber % curr || smallNumber % curr) {
            continue;
        }
        return false;
    }
    return true;
}
// 暴力遍历
function findGreatestCommonDivisorBrutle(num1: number, num2 : number) : number {
    let greatestCommonDivisor: number = 1;
    let bigNumber = num1 > num2 ? num1 : num2;
    let smallNumber = bigNumber === num1 ? num2 : num1;
    let curr: number  = 2;
    for(curr; curr <= smallNumber / 2 ; curr ++ ){
        // 只要有满足公因数定义的最大值我们就记录下来
        if(bigNumber % curr === 0 && smallNumber % curr === 0) {
            greatestCommonDivisor = curr;
        }
    }
    return greatestCommonDivisor;
}

// 欧几里得算法
function findGreatestCommonDivisor(num1: number, num2: number) : number {
    return gcd(num1, num2) || 1;
}

function gcd(num1: number, num2: number) : number {
    let bigNumber = num1 > num2 ? num1 : num2;
    let smallNumber = bigNumber === num1 ? num2 : num1;
    return bigNumber % smallNumber === 0 ? smallNumber : gcd(smallNumber,bigNumber % smallNumber)
}


// 更相减损术
function findGCD(num1: number, num2: number) : number {
    if(num1 === num2){
        return num1;
    }
    return gcd2(num1, num2) || 1;
}

function gcd2(num1: number, num2: number) : number {
    if(num1 === num2){
        return num1;
    }
    let bigNumber = num1 > num2 ? num1 : num2;
    let smallNumber = bigNumber === num1 ? num2 : num1;
    return gcd2(bigNumber - smallNumber, smallNumber);
}