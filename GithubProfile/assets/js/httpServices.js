const API_URL = "https://api.github.com"
const HEADER = ({
    Authorization: 'Bearer 362f1f2eda305a426bf2e3f75ad902a7ba2369d2'
})

const fetchApi = async (endPoint) => {
    return fetch(API_URL + endPoint, {
        headers: HEADER
    }).then(response => {
        return response.json();
    }).then(jsonData => {
        return jsonData;
    }).catch(err => {
        console.error("ERROR===>", err);
    })
}

const fetchProfilesApi = async (queryWord, sortBy) => {
    return fetchApi("/search/users?q=" + queryWord + `${sortBy ? "&sort=" + sortBy :
        ""}`)
}

const fetchProfileByIDApi = async (id) => {
    return fetchApi("/user/" + id)
}

const fetchReposApi = async (queryWord) => {
    return fetchApi("/search/repositories?q=" + queryWord)
}

const fetchReposByIdApi = async (id) => {
    return fetchApi("/repositories/" + id)
}

const fetchTopicApi = async (queryWord) => {
    return fetchApi("/search/topics?q=" + queryWord)
}
