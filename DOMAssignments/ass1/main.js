
// DeBouncing and Throttling!

let timeout;
const debounce_Function = () => {


    // Okay Call me , i will wait for n (100ms) Milliseconds , If i dont get called again in 100ms i will call CalculateInterest! , But if i do get called in 100ms then again ill wait for more 100ms and so on delay until input is relaxed!


    // setTimeout(() => {
    //     CalculateInterest()
    // } , 100)

    clearTimeout(timeout)
    timeout = setTimeout(() => {
        CalculateInterest()
    }, 100);




}

const CalculateInterest = () => {


    let PRINCIPAL = parseInt(document.querySelector("#principalInput").value);
    let RATE = parseInt(document.querySelector("#rateInput").value);
    let TIME = parseInt(document.querySelector("#timeInput").value);
    
    if (!PRINCIPAL || !RATE || !TIME) {
        console.log("WHAT THE HELL YOU DOUING")
    }
    else {
    
        const requestURL = `https://sum-server.100xdevs.com/interest?principal=${PRINCIPAL}&rate=${RATE}&time=${TIME}`;
    
        fetch(requestURL)
            .then((response) => {
                return response.json()
            })
            .then((DATA) => {
    
                let INTEREST = DATA.interest;
    
                const appendData = document.createElement("h1");
    
                appendData.style.textAlign = "center";
                appendData.style.backgroundColor = "cyan";
                appendData.style.color = "black";
    
                appendData.textContent = `Interest = ${INTEREST}`;
    
                document.querySelector(".displayData").appendChild(appendData)
    
    
            })
    
    }
}


