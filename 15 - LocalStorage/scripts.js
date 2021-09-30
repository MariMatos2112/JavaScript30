const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const item = document.querySelector('input[type="text"]');
let innerHTML = '';
let itemsData = {};

const isChecked = (boolean) => {
  if(boolean) return 'checked';
  else return '';
}

if(localStorage.getItem('itemsDataSaved')){
  itemsData = JSON.parse(localStorage.getItem('itemsDataSaved'));
  
  for(const element in itemsData){
    innerHTML += `<li><input type="checkbox" id="${element}" ${isChecked(itemsData[element])}><label for="${element}">${element}</label></li>`
  }

  itemsList.innerHTML = innerHTML;
}

addItems.addEventListener("submit", (e) => {
  e.preventDefault();
  innerHTML = '';

  itemsData[item.value] = false;  
  localStorage.setItem('itemsDataSaved', JSON.stringify(itemsData));
  console.log(itemsData);

  for(const element in itemsData){
    innerHTML += `<li><input type="checkbox" id="${element}" ${isChecked(itemsData[element])}><label for="${element}">${element}</label></li>`
  }
  
  itemsList.innerHTML = innerHTML;

  item.value = '';

  const labels = document.querySelectorAll('label');
  labels.forEach(element => {
    element.addEventListener('click', (e) => {
      itemsData[element.innerText] = !itemsData[element.innerText];
      console.log(itemsData)
      localStorage.setItem('itemsDataSaved', JSON.stringify(itemsData));
    })
  })
});


