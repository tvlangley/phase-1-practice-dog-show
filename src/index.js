document.addEventListener('DOMContentLoaded', () => {
    renderDogs()
})

const renderDogs = () => {
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(data => listDogsInTable(data))
}

const listDogsInTable = (dogs) => {
    const tableBody = document.querySelector('#table-body')

    dogs.forEach(dogInfo => {
        const tableRow = document.createElement('tr')

        for (info in dogInfo){
            if (info != 'id'){
                const tableData = document.createElement('td')
                tableData.textContent = dogInfo[info]
                tableRow.append(tableData)
            }
        } 
        const button = document.createElement('button')
        button.textContent = 'Edit'
        button.id = 'edit-button'
        editDog(button)

        tableRow.append(button)
        tableBody.append(tableRow)
    })
}

const editDog = (button) => {
    button.addEventListener('click', (event) => {
        const inputs = document.getElementsByTagName('input')
        const formFields = event.target.parentElement.children
        const tds = Array.from(formFields).filter(field => 'td' === field.tagName.toLowerCase())

        inputs[0].value = tds[0].textContent
        inputs[1].value = tds[1].textContent
        inputs[2].value = tds[2].textContent
    })
}
