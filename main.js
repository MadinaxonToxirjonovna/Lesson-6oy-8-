let limitUsers = document.querySelector(".users");
let limitAge = document.querySelector(".limitAge");
let formUsers = document.querySelector(".formUsers");
let sortedCards = document.querySelector(".sortedCards");
let cards = document.querySelector(".cards");
let cardWrapper = document.querySelector(".cards .cardWrapper");


formUsers.addEventListener('submit', function(event) {
    event.preventDefault();

    cardWrapper.innerHTML = "";
    sortedCards.querySelector('.cardWrapper').innerHTML = "";


    fetch("https://dummyjson.com/users")
    .then(response => response.json())
    .then(data => filterUsers(data.users.slice(0, limitUsers.value)));

    function filterUsers(users){
        users.forEach(user =>{

            let card = document.createElement('div');
            card.className = "card";

           let firstName = document.createElement("h3");
           firstName.className = "firstName";
           firstName.textContent = `Ism: ${user.firstName}`;

           let email = document.createElement("h3");
           email.className = "email";
           email.textContent = `Email: ${user.email}`;

           let userAge = document.createElement("h3");
           userAge.className = "userAge";
           userAge.textContent = `Yosh: ${user.age}`;

           let phone = document.createElement("h3");
           phone.className = "phone";
           phone.textContent = `Phone: ${user.phone}`;

           let birthDate = document.createElement("h3");
            birthDate.className = "birthDate";
            birthDate.textContent = `Tug'ilgan sanasi: ${user.birthDate}`;


           card.append(firstName, email, userAge, phone, birthDate);
           cardWrapper.appendChild(card);
});


users.forEach(user => {
    if (user.age > limitAge.value) {
        let card = document.createElement("div");
        card.className = "card";


        let firstName = document.createElement('h3');
        firstName.className = "firstName";
        firstName.textContent = `Ism: ${user.firstName}`;

            let email = document.createElement("h3");
            email.className = "email";
            email.textContent = `Email: ${user.email}`;

            let userAge = document.createElement('h3');
            userAge.className = "userAge";
            userAge.textContent = `Yosh: ${user.age}`;

            let phone = document.createElement("h3");
            phone.className = "phone";
            phone.textContent = `Phone: ${user.phone}`;

            let birthDate = document.createElement("h3");
            birthDate.className = "birthDate";
            birthDate.textContent = `Tug'ilgan sanasi: ${user.birthDate}`;


            card.append(firstName, email, userAge, phone, birthDate);
            sortedCards.querySelector(".cardWrapper").appendChild(card);

    }
});

}

});