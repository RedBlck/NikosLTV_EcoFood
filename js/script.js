let fruits = [];

// -------- add to card ---------------------------------------------

let addToCardButtons = document.getElementsByClassName('add-to-card');

for (let i = 0; i < addToCardButtons.length; i++) {
  addToCardButtons[i].addEventListener('click', addToCard);
}

function addToCard(event) {
  let count = document.getElementById('count');
  ++count.innerHTML;

  let id = event.target.parentNode.id;
  let name = event.target.parentNode.getElementsByTagName('h3')[0].innerText;
  let price = event.target.parentNode.getElementsByTagName('p')[0].innerText;
  price = price.match(/\d+/)[0];

  let existFruit = fruits.find(item => item.id === Number(id));
  if(existFruit){
    ++existFruit.amount;
  } else {
    let fruit = {
      id: Number(id),
      name: name,
      price: Number(price),
      amount: 1
    }
    fruits.push(fruit);
  }
}

// -------- clear card ---------------------------------------------

let clearCardButton = document.getElementById('clearCard');

clearCardButton.addEventListener('click', clearCard);

function clearCard(event){
  let count = document.getElementById('count');
  count.innerHTML = '0';

  fruits = [];
}

// -------- show card -----------------------------------------------

let showCardButton = document.getElementById('show-card');
showCardButton.addEventListener('click', showCard);

function showCard(event){
  let rows = '';
  for (var i = 0; i < fruits.length; i++) {
    rows += '<tr>' +
              '<td>' + fruits[i].name + '</td>' +
              '<td>' + fruits[i].price + '</td>' +
              '<td><input id="'+ fruits[i].id
                +'" class="fruit-amount" type="number" min="0" value="'
                + fruits[i].amount + '"/>' + '</td>' +
              '<td>= &#36; <span>'
                + fruits[i].price * fruits[i].amount + '</span></td>' +
            '</tr>';
  }

  let basket = document.getElementById('basket');
  basket.innerHTML = rows;

  // -------------- add input listener ------------------------------------
  let fruitAmountInput = document.getElementsByClassName('fruit-amount');

  for (let i = 0; i < fruitAmountInput.length; i++) {
    fruitAmountInput[i].addEventListener('input', priceByFruit);
  }

  // -------------- total price -------------------------------------------
  totalPrice();
}

function priceByFruit(event){
  let amount = event.target.value; //new amount - string
  let fruitId = event.target.id;

  // ------------update fruit amount --------------------------------------
  let fruit = fruits.find(item => item.id === Number(fruitId));
  if(fruit){
    fruit.amount = amount;
  }

  //-------------find priceByFruit element ----------------------
  let fruitPrice = event.target.parentNode.parentNode;//input->td->tr
  fruitPrice.getElementsByTagName('span')[0].innerText = fruit.amount*fruit.price;

  totalPrice();
}

function totalPrice(){
  let totalPrice = document.getElementById('total-card');
  let total = 0;
  for (let i = 0; i < fruits.length; i++) {
    total += fruits[i].amount * fruits[i].price;
  }
  totalPrice.innerText = total;
}