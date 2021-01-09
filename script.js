const natURL = 'https://api.covidtracking.com/v1/us/current.json';
const statURL = 'https://api.covidtracking.com/v1/states/current.json'

let nationalDataContainer = document.querySelector('.nationalDataContainer');
let stateDataContainer = document.querySelector('.stateDataContainer');
let natButton = document.getElementById('natSubmit');
let statButton = document.getElementById('statSubmit');

natButton.addEventListener('click', fetchNat)

function fetchNat(event) {
    event.preventDefault()
    fetch(natURL)
        .then(response => response.json())
        .then(json => displayNat(json))
}

function displayNat(json) {
    console.log(json);
    let natDeaths = `${json[0].deathIncrease}`
    let natPositives = `${json[0].positiveIncrease}`
    let natDate = `${json[0].date}`
    let natDateClean = 'Date: ' + natDate.substr(4,2) + '-' + natDate.substr(6,2) + '-' + natDate.substr(0,4) + "\n" + 'Positive Cases: ' + natPositives + "\n" + 'Deaths: ' + natDeaths 
    let stateData = document.createElement('h1');
    stateData.className = 'quote';
    stateData.innerText = `${natDateClean}`
    stateData.style = 'font-family: "Times New Roman", Times, serif; color: #3a2718';
    console.log(stateData);

    nationalDataContainer.appendChild(stateData);
}

statButton.addEventListener('click', fetchState)


function fetchState(event) {
    event.preventDefault()
    fetch(statURL)
        .then(response => response.json())
        .then(json => displayData(json))
}

function displayData(json) {
    console.log(json);
    let state = document.getElementById('select-state').value
    console.log(state)
    const stateArray = json.indexOf(toString(state))
    console.log(stateArray)
    
    let natDeaths = `${json[state].deathIncrease}`
    let natPositives = `${json[state].positiveIncrease}`
    let natDate = `${json[0].date}`
    let natDateClean = 'Date: ' + natDate.substr(4,2) + '-' + natDate.substr(6,2) + '-' + natDate.substr(0,4) + "\n" + 'Positive Cases: ' + natPositives + "\n" + 'Deaths: ' + natDeaths 
    let stateData = document.createElement('h1');
    stateData.className = 'quote';
    stateData.innerText = `${natDateClean}`
    stateData.style = 'font-family: "Times New Roman", Times, serif; color: #3a2718';
    console.log(stateData);

    stateDataContainer.appendChild(stateData);
}