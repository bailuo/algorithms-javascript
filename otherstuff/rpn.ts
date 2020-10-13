
// 逆波兰算法是将我们熟悉的在四则运算当中熟悉的中缀表达法转换成后缀表达法，然后使用其后缀计算规则计算数学结果


/**
 * 
 * 
 * 
 * 使用TypeScript实现一个Stack
 * The Following Part is a Stack Data Structure written in Typescript
 * 
 * The purpose of developing a Stack is fulfilling the needs of explain how RPN works with the Stack data structure. 
 * In fact, simply using an arry satisfy our requirement of a simple implementation too. But I still think the work 
 * folloing is time worthy, since we are learning and practicing.
 * 
 * 
 */

// interface for elements stored in MyStach
interface MyStackElement<T>{
    value: T | undefined,
    next: MyStackElement<T> | null
}

// interface for a Stack data structure built with typescript
interface MyStack<T>{
     size:number,
     top: MyStackElement<T> | null,
     bottom:MyStackElement<T> | null,
     push(val: T): number,
     pop(): MyStackElement<T> | null
}


// implementation of the element class
class CharStackElement<T> implements MyStackElement<T> {
     value: T;
     next:MyStackElement<T>;

    constructor(val: T){
        this.value = val;
        this.next = null;
    }
}

// implementation of the stack class
class CharStack<T = String> implements MyStack<T> {
    size: number;
    top: CharStackElement<T>;
    bottom:CharStackElement<T>;
    constructor() {
        this.size = 0;
        this.top = null;
        this.bottom= null
    }

    public push(val:T):number{
        const el = new CharStackElement(val);
        if(this.size === 0){
            this.top = el;
            this.bottom = el;
            return 1;
        }
        const currTop = this.top;
        el.next = currTop.next;
        this.top = el;
        this.size += 1;
        return this.size;
    }

    public pop(): CharStackElement<T> {
        if(this.size === 0) {
            return null;
        }
        const topEle = this.top as CharStackElement<T>
        this.top = topEle.next;
        this.size -= 1;
        topEle.next = null;
        return topEle;
    }
}


/**
 * The Code Below is actual implementation of RPN algorithm
 */

// 从中缀表达式切换为后缀表达式
function transferExpression(expression: string): string {
    return '';
}
// 使用后缀表达式计算结果
function calculate(expression : string): number {
    return NaN;
}