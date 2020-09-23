function shuffle<T>(arr: Array<T>): Array<T> {
    const len: number = arr.length;
    // 避免修改原数组
    const results = arr.concat([]);
    let remain: number = len;
    while (remain > 0) {
        // 随机选定一个目标位置A
        const randIndex = Math.floor(Math.random() * remain);
        const targetIndex = len - 1 - randIndex;
        swap(randIndex, targetIndex, results);
        remain--;
    }
    return results;
}

function swap<T>(idx1:number, idx2:number, arr:Array<T>):Array<T>{
        // 取出目标位置A所对应元素
        const tempItem: T = arr[idx1];
        // 目标A元素原来位置替换成镜像位置B元素
        arr[idx1] = arr[idx2];
        // 镜像位置B替换成原位置A所对应元素
        arr[idx2] = tempItem;
        return arr;
}

const testCase: number[] = [1, 2, 3, 4, 5, 6, 7];
const shuffled = shuffle(testCase);
console.log(testCase);
console.log(shuffled);