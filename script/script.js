let cars = [
  { num: 1, name: "Malibu", price: 31000},

  { num: 2, name: "Nexia", price: 12000},

  { num: 3, name: "Onix", price: 21000},

  { num: 4, name: "Tahoe", price: 100000},

  { num: 5, name: "Cobalt", price: 13000},

  { num: 6, name: "Tracker", price: 26000},

  { num: 7, name: "Kia k5", price: 43000},

  { num: 8, name: "Santafe", price: 50000},

  { num: 9, name: "Elantra", price: 35000},

  { num: 10, name: "Tico", price: 2500}
]

let choice = +prompt(`Выберите машину которую хотите купите:

1. Malibu       2. Nexia        3. Onix       4. Tahoe      5. Cobalt

6. Tracker      7. KIA K5       8. Santafe    9. Elantra    10. Tico
`);

if      (choice == cars[0].num)  { alert(`${cars[0].name} !!! Хороший выбор. Оплатите ${cars[0].price}`) }
else if (choice == cars[1].num)  { alert(`${cars[1].name} !!! Хороший выбор. Оплатите ${cars[1].price}`) }
else if (choice == cars[2].num)  { alert(`${cars[2].name} !!! Хороший выбор. Оплатите ${cars[2].price}`) }
else if (choice == cars[3].num)  { alert(`${cars[3].name} !!! Хороший выбор. Оплатите ${cars[3].price}`) }
else if (choice == cars[4].num)  { alert(`${cars[4].name} !!! Хороший выбор. Оплатите ${cars[4].price}`) }
else if (choice == cars[5].num)  { alert(`${cars[5].name} !!! Хороший выбор. Оплатите ${cars[5].price}`) }
else if (choice == cars[6].num)  { alert(`${cars[6].name} !!! Хороший выбор. Оплатите ${cars[6].price}`) }
else if (choice == cars[7].num)  { alert(`${cars[7].name} !!! Хороший выбор. Оплатите ${cars[7].price}`) }
else if (choice == cars[8].num)  { alert(`${cars[8].name} !!! Хороший выбор. Оплатите ${cars[8].price}`) }
else if (choice == cars[9].num)  { alert(`${cars[9].name} !!! Выбор так себе. Оплатите ${cars[9].price}`) }
else { alert("Error")}