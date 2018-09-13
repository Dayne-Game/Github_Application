//Setup submit button
var user = document.querySelector('.search');
var submit = document.querySelector('.submit');
var test = document.querySelector('.test');

submit.addEventListener('click', function () {
    var name = user.value;

    // Change the token to one of yours
    var url = `https://api.github.com/users/${name}/repos?per_page=100`;
    showData(url, name);
    listApi(url);
});

function showData(url, name) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let row = document.querySelector(".row");
            let result = data
                .map(x => {
                    let description = " ";

                    if (x.description !== null)
                        description = `${x.description}`;
                    else
                        description = "No Description ";

                    let pages = " ";

                    if (x.has_pages == true)
                        pages = `<a class="btn" style="background-color: #555;" href="https://dayne-game.github.io/${x.name}" target="_blank">Go to Website</a>`;

                    return ` 
                        <div class="card border-dark m-2 mb-3" style="width: 20rem; background-color: #444 !important;">
                            <div class="card-header" style="background-color: #333;">My Github Repositories</div>
                            <div class="card-body">
                                <h6 class="card-title">${x.name}</h6>
                                <p class="card-text">${description}</p>
                                <a href="${x.html_url}" target="_blank" style="background-color: #555;" class="btn">Go to Repo</a>
                                ${pages}
                            </div>
                        </div>`;
                }).join("");
            row.innerHTML = result;
        });
}

function listApi(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let linkbox = document.querySelector(".link-box");
            let result = data
                .map(x => {
                    return `
                <li><a href="${x.html_url}">${x.name}</a></li>`;
                }).join("");
            linkbox.innerHTML = result;
        })
}