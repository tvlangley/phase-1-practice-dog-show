// 1ST PASS AT DELIVERABLES
document.addEventListener('DOMContentLoaded', () => {
    // 1st bullet: fetch data from localhost:3000/dogs
    const url = 'http://localhost:3000/dogs'
    fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(dogList => dogList.forEach(dog => {
        // deliverable 2: add dog data to the DOM
        // console.log(dog)
        const tableBody = document.querySelector('#table-body')
        const tableRow = document.createElement('tr')
        const tableDataName = document.createElement('td')
        tableDataName.innerHTML = dog.name

        const tableDataBreed = document.createElement('td')
        tableDataBreed.innerHTML = dog.breed

        const tableDataSex = document.createElement('td')
        tableDataSex.innerHTML = dog.sex

        const tableDataButton = document.createElement('button')
        tableDataButton.innerHTML = 'Edit Dog'

        tableRow.append(tableDataName)
        tableRow.append(tableDataBreed)
        tableRow.append(tableDataSex)
        tableRow.append(tableDataButton)

        tableBody.append(tableRow)
        // <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>
    
        // deliverable 3: make dog editable aka add event to button
        tableDataButton.addEventListener('click', () => {
            const dogForm = document.querySelector('#dog-form')
            dogForm.name.value = dog.name
            dogForm.breed.value = dog.breed
            dogForm.sex.value = dog.sex

            // const inputs = document.getElementsByTagName('input')
            // inputs[0].value = dog.name
            // inputs[1].value = dog.breed
            // inputs[2].value = dog.sex
        })
    }))
})


// // 2ND PASS AT DELIVERABLES WITH RESUABLE FUNCTIONS
// document.addEventListener('DOMContentLoaded', () => {
//     renderDogs()
// })

// // 1st function: fetches the list of dogs
// const renderDogs = () => {
//     const url = 'http://localhost:3000/dogs'
//     fetch(url)
//     .then(res => res.json())
//     .then(dogList => dogList.forEach(listDogsInTable))
// }

// // 2nd function: creates a row in the data to display each dog's info
// const listDogsInTable = (dog) => {
//         const tableBody = document.querySelector('#table-body')
//         const tableRow = document.createElement('tr')
//         const tableDataName = document.createElement('td')
//         tableDataName.innerHTML = dog.name

//         const tableDataBreed = document.createElement('td')
//         tableDataBreed.innerHTML = dog.breed

//         const tableDataSex = document.createElement('td')
//         tableDataSex.innerHTML = dog.sex

//         const tableDataButton = document.createElement('button')
//         tableDataButton.innerHTML = 'Edit Dog'

//         tableRow.append(tableDataName)
//         tableRow.append(tableDataBreed)
//         tableRow.append(tableDataSex)
//         tableRow.append(tableDataButton)

//         tableBody.append(tableRow)
//         tableDataButton.addEventListener('click', () => editDog(dog))
// }

// // 3rd function: populates the dog form with the selected dog's data
// const editDog = (dog) => {
//     const dogForm = document.querySelector('#dog-form')
//     dogForm.name.value = dog.name
//     dogForm.breed.value = dog.breed
//     dogForm.sex.value = dog.sex
// }