type User = {
    name: string,
    age: number,
    gender: "male" | "female",
    address: {
        division: string,
        city: string
    }

}

const user1: User = {
    name: "emon",
    age: 20,
    gender: "male",
    address: {
        division: "Dhaka",
        city: "Dhaka"
    }
}

const user2: User = {
    name: "emon",
    age: 20,
    gender: "male",
    address: {
        division: "Dhaka",
        city: "Dhaka"
    }
}

console.log(user1, user2);

//type with function

type addFunction = (num1: number, num2: number) => number

const add: addFunction = (num1, num2) => num1 + num2;