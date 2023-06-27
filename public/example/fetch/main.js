import { addDataToTable } from "./modules/helper.js"

const staff = document.getElementById('staff')
const url = 'https://raw.githubusercontent.com/dbwebb-se/js-v2/master/example/fetch/data/'
const file = 'staff.json'

fetch(`${url}/${file}`)
    .then(response => response.json())
    .then((json) => {
        addDataToTable(staff, json)
    })

