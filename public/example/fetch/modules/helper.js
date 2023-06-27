const addDataToTable = (staff, data) => {
  for (const teacher of data) {
    staff.innerHTML += `
            <tr>
                <td>${teacher.firstname}</td>
                <td>${teacher.lastname}</td>
                <td>${teacher.courses.join(', ')}</td>
            </tr>`
  }
}

export { addDataToTable }
