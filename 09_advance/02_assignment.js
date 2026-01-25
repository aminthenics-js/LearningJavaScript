const button = document.getElementById("btn");
const card = document.getElementById("card");

button.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.github.com/users/aminthenics-js");

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    
    const data = JSON.parse(xhr.responseText);

    card.style.display = "block";
    card.innerHTML = `
      <img src="${data.avatar_url}" alt="avatar">
      <h3>${data.name}</h3>
      <p>Username: ${data.login}</p>
      <p>Followers: ${data.followers}</p>
      <p>Public Repos: ${data.public_repos}</p>
    `;
  };

  xhr.send();
});
