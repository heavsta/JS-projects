document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
    fetch('test.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function(err) {
            console.log(err);
        });
}


// Get local json data
function getJson() {
    fetch('posts.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            let output = '';
            data.forEach(function(post) {
                output += `<li>${post.title}</li>
                            <p>${post.body}</p>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });
}

// Get from an external API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            let output = '';
            data.forEach(function(user) {
                output += `<li>${user.login}</li>
                            <div class="userImg"><img src="${user.avatar_url}" alt="Github user avatar" width="300" height="300"</div>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });
}