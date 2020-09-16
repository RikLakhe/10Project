const inputForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const removeButton = document.querySelector('.card-button');

let todoStorage = [];

removeButton && removeButton.addEventListener('click', function (e) {
    console.log('wow', e)
})


inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    todoStorage.push(inputForm.todo.value);
    inputForm.reset();

    updateList();
})

const updateList = () => {
    let dom = "";
    todoStorage.forEach((todoItem, todoIndex) => {
        dom += `<li class="card">
                <div class="card-body d-flex justify-content-between">
                    <div class="card-text">
                        ${todoItem}
                    </div>
                    <button class="delete card-button btn-lg btn-outline-dark" id="${todoIndex}">
                        X
                    </button>
                </div>
            </li>`
    })

    todoList.innerHTML = dom;
    return false;
}

todoList.addEventListener("click", function (e) {
    if (e.target.classList.contains('delete')) {
        todoStorage.splice(e.target.id, 1);
        updateList();
    }
})
