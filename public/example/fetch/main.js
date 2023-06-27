import { addDataToTable } from "./modules/helper.js"

const staff = document.getElementById('staff')
const url = 'https://raw.githubusercontent.com/dbwebb-se/devjs/main/public/example/fetch/data/'
const file = 'staff.json'

fetch(`${url}/${file}`)
    .then(response => response.json())
    .then((json) => {
        addDataToTable(staff, json)
    })

