const user = {
    name: {
        userName: "Emon",
        middleName: "Ishtiak",
        lastName: "Hossain"
    },
    age: 20,

}

const myName = user.name.userName;
console.log(myName);

const {age, name:{userName, middleName}} = user;

console.log(age, middleName, userName);

const friends = ["rahim", "karim", "tuna", "muna"];

// const myBestFriends = friends[1]

const [, myBestFriends, ] = friends
console.log(myBestFriends);