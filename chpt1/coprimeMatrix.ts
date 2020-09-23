 
// 对应1.1.30

function isCoprime(num1: number, num2: number):Boolean{
   if(num1 < num2){
       const temp: number = num1;
       num1 = num2;
       num2 = temp;
   }
   let remain:number = num1 % num2;
   while(remain !== 0 ) {
       num1 = num2;
       num2 = remain;
   }
   return num2 === 1
}


function findCoprimeCoordinate<T>(arr:Array<Array<T>>){
    let result: T;
    for(let i: number = 0; i < arr.length; i++) {
        const column:T[] = arr[i];
        for(let j: number = 0 ; j < column.length; j++){
            if(isCoprime(i, j)){
                result = arr[i][j];
            }
        }
    }
    return !!result;
}