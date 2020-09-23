// 是否是回文字符串
function isPalindrom(str: string): Boolean {
    const len: number  = str.length;
    for(let idx : number; idx < len/ 2; idx ++){
        if(str[idx] !== str[len -1 - idx]){
            return false;
        }
    }
    return true;
}

// 找出最长子串-- 暴力解法
function longestPalindrom(str: string):string {
    const len: number = str.length;
    let maxLen:number = 1;
    let start: number = 0;
    if(len < 2) {
        return str;
    }
    for(let i : number = 0; i < len -1; i++){
        for(let j : number = i + 1; j < len; j++){
            if(j - i + 1 > maxLen && isPalindrom(str.substring(j, j))){
                maxLen = j - i + 1;
                start = i;
            }
        }
    }
    return str.substring(start, start + maxLen);
}


const longestPalidrom = function(str: string): string {
    const len: number = str.length;
    // 当长度为1的时候，一个字符串自己就是回文
    if(len < 2) {
        return str;
    }
    let maxLen: number = 1;
    let begin: number = 0;
    let isPalindrom:boolean = false;
    return '';
}