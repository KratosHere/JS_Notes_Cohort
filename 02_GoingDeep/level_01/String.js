
// String Manipulation!:

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.


// Gonna know Some of the string functions and methods provided by javascript:

const getLength = (theString) => {

    const Length_Of_String = theString.length

    console.log(`Original String: ${theString} & Its Length: ${Length_Of_String}`)
}

const getIndexOf = (MainString , SubString) => {

    // Gives the Index (Point!) of the Sub string Present in the main string:
    // If not found output is: -1

    // If the sub string is present more than once in the main string!:
    // It will give the Index Of its first present point !!
    

    const position = MainString.indexOf(SubString);
    
    console.log(`${SubString} is Present at ${position} in ${MainString}`)

    // What if i want the index of the last!: For that another Function :
    
}

const getLastIndex = (MainString , SubString) => {

    const position = MainString.lastIndexOf(SubString);

    console.log(`${SubString} is Present at ${position} in ${MainString}`)

}

const getSliced = (theString) => {

    
    
}