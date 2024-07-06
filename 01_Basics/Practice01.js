
// Some practice Questions!

const greet01 = (first , last) => {

    return `Hello there ${first} ${last} a Very Good Morning to you!!`;
    
}

// console.log(greet01("SARDAR" , "UDDHAM"));


const greet02 = (gender) => {

    if (gender === "male" || gender === "m") {
        return `Hello Sir , Good morning!`;
    }

    else if (gender === "female" || gender === "f") {
        return `Hello Mam , Good Morning!`;
    }

    else {
        return "GIVE A VALID GENDER!"
    }
}


// console.log(greet02("f"));


const sol03 = () => {

    for (let n = 0 ; n <= 1000 ; n++) {
        console.log(n)
    }
    
}

// sol03()

