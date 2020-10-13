遇到一个 case 需要知道两个数是否互质。两个数如果互为质数，那么说明他们的没有除了 1 以外的公因数。那么我们判断两个数是否是质数可以转换为是否能找到两个数的公因数。

根据定义，最先想到的方法是我们就从 2 开始一个数一个数的试验，只要是小于较小的数的一半的每个数字我们都试一下。如果找到到，那么就说明两个数有除 1 以外的公因数。则这两个数不是互为质数。

```ts
function isCoprime(num1: number, num2: number): Boolean {
    let bigNumber = num1 > num2 ? num1 : num2;
    let smallNumber = bigNumber === num1 ? num2 : num1;
    let curr: number = 2;
    for (curr; curr <= smallNumber / 2; curr++) {
        if (bigNumber % curr || smallNumber % curr) {
            continue;
        }
        return false;
    }
    return true;
}
```

然而这种暴力枚举法的时间复杂度要 O(n) 如果是面试求是否是互质的，完全可以作为答案给出。这个思路可以同样用于求两个数的最大公约数

```ts
function findGreatestCommonDivisor(num1: number, num2: number): number {
    let greatestCommonDivisor: number = 1;
    let bigNumber = num1 > num2 ? num1 : num2;
    let smallNumber = bigNumber === num1 ? num2 : num1;
    let curr: number = 2;
    for (curr; curr <= smallNumber / 2; curr++) {
        // 只要有满足公因数定义的最大值我们就记录下来
        if (bigNumber % curr === 0 && smallNumber % curr === 0) {
            greatestCommonDivisor = curr;
        }
    }
    return greatestCommonDivisor;
}
```

但是如果数字比较大，消耗还是比较大的。但是最大公因数除了定义还有两个特性，一个是“欧几里得算法”，另一个是来自《九章算术》的更相减损术。前者的定义是**两个正整数 A 和 B 的最大公约数是 A/B 的余数 C 和 较小的数 B 之间的最大公约数**。后者的定义和前者略不同，用的不是两数相除的余数 C 而是 AB 两者的差值。换句话说就是**A 与 B 的最大公约数是 A-B 的差值 C 和 B 的最大公约数**

使用前者的定义

```ts
function findGreatestCommonDivisor(num1: number, num2: number): number {
    return gcd(num1, num2) || 1;
}

function gcd(num1: number, num2: number): number {
    let bigNumber = num1 > num2 ? num1 : num2;
    let smallNumber = bigNumber === num1 ? num2 : num1;
    return bigNumber % smallNumber === 0
        ? smallNumber
        : gcd(smallNumber, bigNumber % smallNumber);
}
```

使用后者的定义

```ts
// 更相减损术
function findGreatestCommonDivisor(num1: number, num2: number): number {
    if (num1 === num2) {
        return num1;
    }
    return gcd(num1, num2) || 1;
}

function gcd(num1: number, num2: number): number {
    if (num1 === num2) {
        return num1;
    }
    let bigNumber = num1 > num2 ? num1 : num2;
    let smallNumber = bigNumber === num1 ? num2 : num1;
    return gcd(bigNumber - smallNumber, smallNumber);
}
```
