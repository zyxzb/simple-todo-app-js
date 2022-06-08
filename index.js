document.querySelector('input').addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        event.preventDefault()
    }
})

function addItem() {

    const inputValue = document.querySelector('input').value

    if (inputValue !== '') {

        const ul = document.querySelector('ul')
        const input = document.querySelector('input')
        const taskText = input.value;
        const newItem = document.createElement('li')
        const date = Date.now()
        newItem.innerHTML = `${taskText}<button onclick="removeItem(${date})">X</button>`
        newItem.dataset.id = date
        newItem.setAttribute("onclick", "done()")
        ul.appendChild(newItem)
        input.value = ''

    }
}

function removeItem(id) {

    const ulli = document.querySelectorAll('ul li')
    const li = [...ulli].find(el => el.dataset.id == id)
    li.remove(id)

}

function done() {

    const li = event.target
    li.classList.toggle("done")
}