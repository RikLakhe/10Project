const noteForm = document.querySelector('#note-form')
const noteList = document.querySelector('#note-list')
const noteStorage = [];

noteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let note = new Note(new Date(), noteForm.note.value)

    noteStorage.push(note);
    noteForm.reset();

    updateList();
})

const updateList = () => {
    let dom = "";
    noteStorage.forEach((noteItem, noteIndex) => {
        let temp = noteItem.data.replace(/\\n/g, "<br />")

        dom += `<li class="card">
                <div class="card-body d-flex justify-content-between">
                    <div class="card-text">
                       <p>${temp}</p> 
                    </div>
                    <button class="delete card-button btn-sm btn-outline-dark" id="${noteIndex}">
                        X
                    </button>
                </div>
            </li>`
    })

    noteList.innerHTML = dom;
    return false;
}
