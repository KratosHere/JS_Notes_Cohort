document.querySelector("#sumBtn").addEventListener("click" , () => {

    let FirstNumber = Number(document.querySelector("#firstNumInput").value);
    let SecondNumber = Number(document.querySelector("#secondNumInput").value);

    if (!FirstNumber || !SecondNumber) {
        
        const addh1 = document.createElement("h1");

        addh1.style.textAlign = "center";
        addh1.style.backgroundColor = "red";
        addh1.style.color = "black";
        addh1.textContent = "Enter Valid Input , Try Again"

        document.querySelector(".displayData").appendChild(addh1)

    }

    else { // Main Operation!!

        const addResult = document.createElement("h2");

        addResult.style.textAlign = "center";
        addResult.style.backgroundColor = "cyan";
        addResult.style.color = "black";
        addResult.textContent = `Sum is ${FirstNumber + SecondNumber}`;

        document.querySelector(".displayData").appendChild(addResult)


        
        

    }

})