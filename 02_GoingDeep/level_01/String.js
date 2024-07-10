
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

const getSliced = (theString , start , end) => {

    // It returns a Part of a string which is being sliced!

    console.log(`Original String: ${theString}`);

    const slicedPart = theString.slice(start,end); // Last Index Excluded (Not Included!)

    console.log(`Sliced String: ${slicedPart}`)


    const oldMethod = () => {

        const VIAslice = theString.slice(3,5);
        const VIAsubstr = theString.substr(3,5)

        // Substring Returns Upto That length (5) Starting from first arguement(3)
        // Whereas Slice return upto that index part

        console.log(`Sliced Part: ${VIAslice}`);
        console.log(`SubStringed Part: ${VIAsubstr}`);

    }

    oldMethod();
    
}

const getReplacedString = (MainString , replaceThis , byThis) => {

    console.log(`Original String: ${MainString}`);
    // If Input is not present it returns the same string i guess check it out!!
    const replacedString = MainString.replace(replaceThis , byThis);

    console.log(`Replaced: '${replaceThis}' By: '${byThis}' From the Mainstring: '${MainString}'`);
    console.log(`Final String: ${replacedString}`)
}

