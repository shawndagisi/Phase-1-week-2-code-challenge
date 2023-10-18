fetch(`http://localhost:3000/characters`)
.then (res => res.json())
.then(data => {displayAnimalList(data)})
.catch(error => console.log(error))





const animalList = document.getElementById('animal-list');
const animalDetails = document.getElementById('animal-details');
const resetButton = document.getElementById('reset-button');

// Function to display the list of animal names
function displayAnimalList(data) {
    animalList.innerHTML = '';
    data.forEach(animal => {
        const animalName = document.createElement('div');
        animalName.textContent = animal.name;
        animalName.classList.add('animal-name');

        animalName.addEventListener('click', () => {
            displayAnimalDetails(animal);
        });

        animalList.appendChild(animalName);
    });
}

// Function to display the details of a selected animal
function displayAnimalDetails(animal) {
    animalDetails.innerHTML = '';
    const animalName = document.createElement('h2');
    
    animalName.textContent = animal.name;

    const animalImage = document.createElement('img');
    animalImage.src = animal.image;

    const voteCount = document.createElement('p');
    voteCount.textContent = `Votes: ${animal.votes}`;

    const voteButton = document.createElement('button');
    voteButton.textContent = 'Vote';
    voteButton.addEventListener('click', () => {
        animal.votes++;
        voteCount.textContent = `Votes: ${animal.votes}`;
    });

    animalDetails.appendChild(animalName);
    animalDetails.appendChild(animalImage);
    animalDetails.appendChild(voteCount);
    animalDetails.appendChild(voteButton);
}

// Function to reset all votes to 0
resetButton.addEventListener('click', () => {
    animalData.characters.forEach(animal => {
        animal.votes = 0;
    });
    displayAnimalList();
    animalDetails.innerHTML = '';
});

// Initial display
displayAnimalList();