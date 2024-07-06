const user01 = {
    FirstName: "Shubhashish",
    age: 21,
    gender: "male" 
}

// console.log(user01.FirstName)
// console.log(user01["FirstName"])

// Both way you can do it!! , ACCESS the values of the object!!

const allUsers = [{
    FirstName: "Shubhashish",
    age: 21,
    gender: "MALE"
} , {
    FirstName: "Akshara",
    age: 20,
    gender: "FEMALE"
} , {
    FirstName: "Lavanya",
    age: 19,
    gender: "FEMALE"
} , {
    FirstName: "Sonakshi Sinha",
    age: 34,
    gender: "MALE"
}]


// Print the male ones only!!

for (let i = 0 ; i < allUsers.length ; i++) {

    if (allUsers[i].gender === "MALE") { // OR allUsers[i]["gender"] === "MALE"
        // console.log(allUsers[i])
        console.log(allUsers[i].FirstName)
    }

    
}