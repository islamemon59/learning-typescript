//Spread Operator;
const friends = ["johir", "korim", "monir"];
const sclFriends = ["Mokbul", "Tokbul", "Sokbul"];
const clgFriends = ["Majnu", "Tajnu", "Saknu"];

friends.push(...sclFriends)
friends.push(...clgFriends)
console.log(friends);

const user = {
    name: "emon",
    phoneNumber: "12343434456"
};
const othersInformation = {
    hobby: "Coding",
    fvrtColor: "So many"
}

const userInfo = {...user, ...othersInformation};

console.log(userInfo);

//Rest Operator

 const sendInvite = (...friends:string[]) => {
    friends.forEach((friend: string) => console.log(`invite friends ${friend}`))
 }

 console.log(sendInvite("kuddus", "buddus", "sandu", "gandu"));