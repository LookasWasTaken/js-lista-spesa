/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while */

// Creo un array con gli oggetti della lista della spesa

const shoppingList = ["Pasta", "Carne", "Pesce", "Verdura", "Ortaggi"];

// prendo il valore dell'input

const input = document.querySelector("input").value;

// Pusho oggetti dentro la lista della spesa

shoppingList.push("Legumi", "Salumi", "Frutta");

console.log(shoppingList);

// Seleziono l'elemento con DI "list"

const listEl = document.getElementById("list");

let list = "";

let i = 0;
while (i < shoppingList.length) {
  list = `<li>C'è da comprare ${shoppingList[i]}</li>`;
  i++;
  console.log(list);
  listEl.insertAdjacentHTML("beforeend", list);
}

function addItem() {
  inputValue = document.getElementById("input").value;
  if (inputValue != "") {
    shoppingList.push(inputValue);
    console.log(shoppingList);
    listEl.insertAdjacentHTML(
      "beforeend",
      `<li>C'è da comprare anche <span>${inputValue}</span></li>`
    );
    return false;
  }
}
