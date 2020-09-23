因为最近参加一个理论考试，其中题库大概 1000 道题，然后每个人的考试都是随机从里面抽取 200 题，且顺序是随机的。那么使用什么算法可以达成这个目的呢。

这里我想到两个思路

1. 每个人进去系统的时候，1000 个题目全部打乱顺序，然后取前 200 道题就可以了。
2. 每次随机取出一道，然后取到 200 题为止

思路一，全盘 shuffle，然后取最前面的。可以选择改变原数组，也可以不改变

```ts
function randomPick<T>(amount: number, source: Array<T>) {
    const shuffled = shuffle(source);
    return shffled.splice(amount);
}
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

function swap<T>(idx1: number, idx2: number, arr: Array<T>): Array<T> {
    // 取出目标位置A所对应元素
    const tempItem: T = arr[idx1];
    // 目标A元素原来位置替换成镜像位置B元素
    arr[idx1] = arr[idx2];
    // 镜像位置B替换成原位置A所对应元素
    arr[idx2] = tempItem;
    return arr;
}
```

思路二，每次随机取一个放入新数组，直到满足数量要求，原数组不断被改动

```ts
function randomPick<T>(amount: number, source: Array<T>) {
    let remain: number = amount;
    const result: T[] = [];
    while (remain > 0) {
        const randomIndex: number = Math.floor(Math.random() * source.length);
        const item: T = source.splice(randomIndex, 1)[0];
        result.push(item);
        remain--;
    }
    return result;
}
```

这里涉及到 Typescript 的知识只有一个泛型，比如在

```ts
function randomPick<T>(amount: number, source: Array<T>) {}
```

这段代码中，因为我不知道数组里存的是什么类型的元素，所以, 我们就先声明一个泛型 T，然后在 Array 元素的具体类型中使用
