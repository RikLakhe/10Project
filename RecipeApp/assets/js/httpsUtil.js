const baseUrl = "https://www.themealdb.com/api/json/v1/1/"

const fetchApi = async (endPoint) => {
    return fetch(baseUrl + endPoint).then(response => {
        return response.json();
    }).then(jsonData => {
        return jsonData;
    }).catch(err => {
        console.error("ERROR===>", err);
    })
}
