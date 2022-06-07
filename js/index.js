const searchBar = document.querySelector("#search");
const submitButton = document.querySelector("#submit");
const form = document.getElementById("github-form");
let repos;

function clickToSearch(e) {
    e.preventDefault();
    nameIconProfile();
}


function nameIconProfile() {
    const searchBar = document.querySelector("#search").value;
    const originalName = searchBar.split(' ').join('')
    let containerContent = document.getElementById("github-container")
    fetch("https://api.github.com/users/"+originalName, {
        headers: new Headers({
            'Accept': 'application/vnd.github.v3+json'
        }),
    })
    .then((result) => result.json())
    .then((data) => {
        if(data.message){
            containerContent.innerHTML = `Profile not found. Please try again.`
        }else{
            containerContent.innerHTML = 
            `<a target="_blank" href="https://www.github.com/${originalName}?tab=repositories"> 
            <img src="${data.avatar_url}"/>
            <p>${data.name} (${data.login})</p>
            <p>${data.html_url}</p>
            </a>`
        }
    })
    .catch(err => {
        console.log(err)
    })
}



form.addEventListener("submit", clickToSearch);