// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const tabs = (topLinks) => {
    const tab = document.createElement("div")

    tab.classList.add("tab")

    tab.textContent = topLinks

    return tab
}

const trendingTopics = document.querySelector(".topics")

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(result => {

    result.data.topics.forEach(topic => {
        trendingTopics.appendChild(tabs(topic))
    })
})
.catch(error => {
    console.log(error)
}) 