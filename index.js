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

function render(events){
    console.log(events);
}

async function run() {
    const events = await getEvents();
    render(events);
}

run();
