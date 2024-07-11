
document.getElementById("runBtn").addEventListener("click" , () => {

    let displayItems = ["apple" , "banana"  , "Pineapple" , "Grapes" , "HumanHand" , "HumanEar"];

    for (let item = 0 ; item < displayItems.length ; item++) {

        // let fruits = displayItems[item];

        const addItem = document.createElement("h1");

        addItem.style.textAlign = "center";
        addItem.style.backgroundColor = "cyan";
        addItem.style.color = "black";
        addItem.style.padding = "30px";
        addItem.style.margin = "20px"

        addItem.textContent = displayItems[item];

        document.querySelector(".displayData").appendChild(addItem)


    }


})