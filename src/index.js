import _ from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

//slider backgrounds
let backgroundIndex = 0;
showBackgrounds();

function showBackgrounds() {
  let i;
  let backgrounds = document.getElementsByClassName('slider-background');

  for (i = 0; i < backgrounds.length; i++) {
    backgrounds[i].style.display = 'none';
  }
  backgroundIndex++;
  if (backgroundIndex > backgrounds.length) {
    backgroundIndex = 1;
  }

  backgrounds[backgroundIndex - 1].style.display = 'block';
  console.log(backgrounds);

  setTimeout(showBackgrounds, 5000); // Change image every 5 seconds
}

document
  .getElementById('slider-arrow')
  .addEventListener('click', scrollToBottom, false);
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  console.log('hi');
}

//active tabs
const doctorTab = document.getElementById('doctor-tab');
const callTab = document.getElementById('call-tab');
const doctorButton = document.getElementById('doctor-button');
const callButton = document.getElementById('call-button');

doctorButton.addEventListener('click', activeDoctorTab, false);
callButton.addEventListener('click', activeCallTab, false);

function activeDoctorTab() {
  callTab.classList.remove('active');
  doctorTab.classList.add('active');
  callButton.classList.remove('active');
  doctorButton.classList.add('active');
}

function activeCallTab() {
  doctorTab.classList.remove('active');
  callTab.classList.add('active');
  doctorButton.classList.remove('active');
  callButton.classList.add('active');
}

//api
const getData = () =>
  fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json()
  );
let specialisty = document.getElementById('specialisity-menu');
let callSpecialisty = document.getElementById('call-menu');
let city = document.getElementById('city-menu');
let area = document.getElementById('area-menu');
async function getUser() {
  const data = await getData();

  for (let i = 0; i < data.length; i++) {
    let drspecialisity = document.createElement('a');
    drspecialisity.setAttribute('id', `specialisity-item-${i}`);
    let drcallspecialisity = document.createElement('a');
    drcallspecialisity.setAttribute('id', `call-specialisity-item-${i}`);
    let drcity = document.createElement('a');
    drcity.setAttribute('id', `city-item-${i}`);
    let drarea = document.createElement('a');
    drarea.setAttribute('id', `area-item-${i}`);

    drspecialisity.appendChild(
      document.createTextNode(data.map((a) => a.company.bs)[i])
    );
    drcallspecialisity.appendChild(
      document.createTextNode(data.map((a) => a.company.bs)[i])
    );
    drcity.appendChild(
      document.createTextNode(data.map((a) => a.address.city)[i])
    );
    drarea.appendChild(
      document.createTextNode(data.map((a) => a.address.street)[i])
    );
    specialisty.appendChild(drspecialisity);
    callSpecialisty.appendChild(drcallspecialisity);
    city.appendChild(drcity);
    area.appendChild(drarea);
  }
}

getUser();

//search
let nameSearch = document.getElementById('name-search-button');
async function handleSearch() {
  let items = await getData();
  console.log(items);
  let value = document.getElementById('name-search-input').value;
  let results = items.filter((o) => o.name.includes(value));
  console.log(results);
  let name = results.map((a) => a.name);
  alert(name);
}
nameSearch.addEventListener('click', handleSearch, false);

//link choice
setTimeout(function replaceSpecialistyLink() {
  let chooseSpecialisty = document.getElementById('choose-specialisty');
  let specialistyLinks = document.querySelectorAll('#specialisity-menu a');
  for (let i = 0; i < specialistyLinks.length; i++) {
    specialistyLinks[i].onclick = function () {
      let newText = specialistyLinks[i].textContent;
      chooseSpecialisty.textContent = newText;
    };
  }
}, 5000);
setTimeout(function replaceCityLink() {
  let chooseCity = document.getElementById('choose-city');
  let cityLinks = document.querySelectorAll('#city-menu a');
  for (let i = 0; i < cityLinks.length; i++) {
    cityLinks[i].onclick = function () {
      let newText = cityLinks[i].textContent;
      chooseCity.textContent = newText;
    };
  }
}, 5000);
setTimeout(function replaceAreaLink() {
  let chooseArea = document.getElementById('choose-area');
  let areaLinks = document.querySelectorAll('#area-menu a');
  for (let i = 0; i < areaLinks.length; i++) {
    areaLinks[i].onclick = function () {
      let newText = areaLinks[i].textContent;
      chooseArea.textContent = newText;
    };
  }
}, 5000);
setTimeout(function replaceCallLink() {
  let chooseCall = document.getElementById('choose-call');
  let callLinks = document.querySelectorAll('#call-menu a');
  for (let i = 0; i < callLinks.length; i++) {
    callLinks[i].onclick = function () {
      let newText = callLinks[i].textContent;
      chooseCall.textContent = newText;
    };
  }
}, 5000);

// disable next and prev buttons
let s1Prev = document.querySelector(
  '#carouselExampleControls .carousel-control-prev'
);
let s1Next = document.querySelector(
  '#carouselExampleControls .carousel-control-next'
);
let s2Prev = document.querySelector(
  '#carouselExampleControls2 .carousel-control-prev'
);
let s2Next = document.querySelector(
  '#carouselExampleControls2 .carousel-control-next'
);
function disableS1Buttons() {
  s1Prev.classList.toggle('disabled');
  s1Next.classList.toggle('disabled');
}
function disableS2Buttons() {
  s2Prev.classList.toggle('disabled');
  s2Next.classList.toggle('disabled');
}
s1Prev.addEventListener('click', disableS1Buttons, false);
s1Next.addEventListener('click', disableS1Buttons, false);
s2Prev.addEventListener('click', disableS2Buttons, false);
s2Next.addEventListener('click', disableS2Buttons, false);
