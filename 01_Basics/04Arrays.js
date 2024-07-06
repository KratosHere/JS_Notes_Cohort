let personNames = ["Harkirat", "Shubhashish", "Hitesh"];
let personAges = [24, 21, 34];

for (let name = 0; name < personNames.length; name++) {
  // console.log(personNames[name]);
}

// WAP to print all the even numbers from an Array!

// let NumbersArray = [0,1,2,3,4,5,6,7,8,9] // Yeah ZERO is a even number you dipshit!!
let NumbersArray = [12, 13, 14, 15, 16, 17, 18];

for (let NUM = 0; NUM < NumbersArray.length; NUM++) {
  // NUM Index ko pakad rha!!

  if (NumbersArray[NUM] % 2 === 0) {
    // NumbersArray[NUM] ==> VALUE KO PAKDEGA!
    // console.log(NUM) // This isnt the VALUE this is the index!!
    console.log(NumbersArray[NUM]);
  }
}
