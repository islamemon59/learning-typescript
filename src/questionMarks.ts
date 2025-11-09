// ?: ternary operator : decision making
// ?? : nullish coalescing operator : null / undefined
// ?. optional chaining


// ? : ternary operator;
const biyerJonnoEligible = (age: number) => {
    // if(age >= 21){
    //     console.log("You can eligible");
    // } else {
    //     console.log("You are not eligible");
    // }

    const result = age>=21 ? "You can eligible" : "You are not eligible";
    return result
}

console.log(biyerJonnoEligible(20));

const theme = "";

// const defaultTheme = theme ?? "Light Theme";

// console.log(defaultTheme);

const themeWithTernary = theme ? theme : "Green Theme";
const themeWithNullish = theme ?? "Green Theme"

console.log({themeWithTernary, themeWithNullish});

//optional chaining

const user: {
    address: {
        town: string,
        city: string,
        postCode? : string
    }
} = {
    address: {
        town: "Dhaka",
        city: "Dhaka",
    }
}

const postalCode = user?.address?.postCode;
console.log(postalCode);