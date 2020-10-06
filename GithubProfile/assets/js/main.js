const repoForm = document.querySelector("#search-repo");
const profileForm = document.querySelector("#search-profile");

window.addEventListener("load", (e) => {
    profileForm.reset();
})

profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const displaySection = document.querySelector("#result-profiles")
    displaySection.innerHTML = ""

    fetchProfilesApi(profileForm.profileName.value,profileForm.searchBy.value).then(jsonData => {
        if (jsonData.items && jsonData.items instanceof Array && jsonData.items.length > 0) {
            jsonData.items.map(data => {

                fetchProfileByIDApi(data.id).then(
                    singleJsonData => {
                        if(singleJsonData.name && singleJsonData.id && singleJsonData.login){
                            let div = document.createElement('div');
                            div.classList.add("column");
                            div.classList.add("is-one-quarter");
                            div.innerHTML = profileCard(singleJsonData);
                            displaySection.append(div)
                        }
                    }
                )

            })

        } else {
            let div = document.createElement('div');
            div.classList.add("column");
            div.innerHTML = emptyCard();
            displaySection.append(div)
        }
    })
})
