// Nullable type

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB:`, input);
  } else {
    console.log("From DB: All User");
  }
};

getUser(null);

// Unknown

const discountCalculator = (price: unknown) => {
  if (typeof price === "number") {
    console.log(price * 0.1);
  } else if (typeof price === "string") {
    const [discountPrice] = price.split(" ");
    console.log(Number(discountPrice) * 0.1);
  } else {
    console.log("Unknown Word");
  }
};

discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);

//Void

const throwError = (msg: string):never => {
  throw new Error(msg);
};

throwError("Error...");
