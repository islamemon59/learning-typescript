type MockDashboard = "Admin" | "User";

const mockDashboard = (role: MockDashboard) => {
  if (role === "Admin") {
    return "Welcome Admin";
  } else if (role === "User") {
    return "Welcome User";
  } else {
    return "Welcome Guest";
  }
};

console.log(mockDashboard("Admin"));


//Intersection 

type Employee = {
    name: string,
    age: number
}

type Manager = {
    designation: string,
    phoneNo: number,
}

type EmployeeManager = Employee & Manager;

const respectedPerson : EmployeeManager = {
    name: "Emon Hossain",
    age: 23,
    designation: "Managing Director",
    phoneNo: 1234
} 

console.log(respectedPerson);