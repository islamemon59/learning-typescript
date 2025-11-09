function addNormal(num1: number, num2: number):number{
    
    let total = ( num1 + num2);
    return total
}

addNormal (1, 3)
const  addArrow = (num1: number, num2: number):number => {
    
    let total = ( num1 + num2);
    return total
}

addArrow(1, 3)

const poorEmon = {
    name: "Emon",
    balance: 0,
addBalance(value: number): number{
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}

poorEmon.addBalance(200);


const arr: number[] = [1, 2, 3, 4 ,5];

const newArray = arr.map((element: number): number => element * element)
console.log(newArray);