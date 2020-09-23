
function rank(target: number, arr: Array<number>) {
    return rankSub(target, arr, 0, arr.length -1);
}

function rankSub(target: number, arr: Array<number>, leftIndex: number, rightIndex: number){
    if(leftIndex > rightIndex) {
        return -1;    
    }
    const midIndex:number = leftIndex + (rightIndex - leftIndex) /2 ;
    if(target < arr[midIndex]) {
        return rankSub(target, arr, leftIndex, midIndex -1);
    }
    if(target > arr[midIndex]) {
        return rankSub(target, arr,  midIndex +1, rightIndex);
    }
    return midIndex;
}