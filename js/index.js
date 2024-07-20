const SiteName = document.getElementById("SiteName");
const SiteURL = document.getElementById("SiteURL");
const tableRow = document.getElementById("tableRow");
let container;

if(localStorage.getItem("storageData") !== null) {
    container = JSON.parse(localStorage.getItem("storageData"))
    displayMessage()
} else {
    container = []
}

function add() {
    const data = {
        name: SiteName.value,
        url: SiteURL.value
    }
    container.push(data)
    localStorage.setItem("storageData", JSON.stringify(container))
    console.log(container)
    displayMessage()
    clearValues()
}

function displayMessage() {
    let show = ''
    for (i = 0; i < container.length; i++) {
        show += ` <tr>
        <td>${container[i].name}</td>
        <td><button class="btn btn-primary" onclick="sites(${i})">Visit</button></td>
        <td><button class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
        </tr>
        `
    }
    tableRow.innerHTML = show;
}

const sites = (tester) => {
    open(container[tester].url)
}

const deleteData = (tester) => {
    container.splice(tester, 1)
    localStorage.setItem("storageData", JSON.stringify(container))
    displayMessage()
}

const clearValues = () => {
    SiteName.value = ""
    SiteURL.value = ""
}