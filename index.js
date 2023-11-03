let eventData = [];

console.log("Getting data from API");

async function getEvents() {
    //use this to get url
    //https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-B/events
    try {
        const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-B/events");
        const data = await response.json();
        return data.data;
    } catch (err) {
        console.log("An error occured!");
    }
}

//build a table row with parsed data.

    function render(events){
        let tBod = document.querySelector("tbody");
        let tableRow = document.createElement("tr");
        for(let event of events){
            tableRow.innerHTML = "";
            for(let i in event){
                let cell = document.createElement("td");
                let data = document.createTextNode(event[i]);
                cell.appendChild(data);
                tableRow.appendChild(cell);
            }

            tBod.appendChild(tableRow);
        }
    }

async function run() {
    const events = await getEvents();
    render(events);
}

run();
