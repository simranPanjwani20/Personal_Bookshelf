async function fetchBooks(query) { 
    let resJson;
    if (query) {
        let apiUrl=`https://openlibrary.org/search.json?q=${query}&limit=10&page`
        const res = await fetch(apiUrl)
        if (res.status === 200) {
             resJson = await res.json()
        }
    }
    // console.log(resJson)
    return resJson;
}
export default fetchBooks;