
const petOne = {name: 'Charlie', type: 'dog', age: 6};
const petTwo = {name: 'Thorin', type: 'rabbit', age: 4};
const petThree = {name: 'Cedar', type: 'dog', age: 7};
const petFour = {name: 'Juniper', type: 'cat', age: 3};

const pets = [petOne, petTwo, petThree, petFour];

$(readyNow); // Shorthand for $(document).ready(readyNow);

function readyNow() {
  appendDom();
  $('#clear-btn').on('click', donateThePets);
  $('#add-btn').on('click', adoptThePets);
}

function appendDom() {
  $('.container').append(`
    <h1>Challenge 170</h1>
    
    <button id="clear-btn">Donate the Pets</button>
    <button id="add-btn">Adopt the Pet</button>
    <input class="inputField" id="petName" placeholder="name">
    <input class="inputField id="petType" placeholder="type">
    <input class="inputField id="petAge" placeholder="age">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody id="tableBody">
      </tbody>
    </table>
  `);

  // YOUR CODE HERE
  // Remember, small steps!

  // Display each of the pets on the DOM.
  petSort(pets);
  // Add an input field that allows users to add new pets from the index page.
  
  // Add a button that clears out the list of pets.
}

function petSort(pets){
  for(let pet of pets){
    petAssign(pet);
  }
}

function petAssign(pet){
  $('#tableBody').append(`
  <tr>
    <td>${pet.name}</td>
    <td>${pet.type}</td>
    <td>${pet.age}</td>
  </tr>`);
}

function donateThePets(){
  $('tbody').empty()
}

function adoptThePets(){

}