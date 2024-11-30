const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
];

let fragment = document.createDocumentFragment();
let root = document.querySelector("#root");

let keysObj = books.map((obj) => Object.keys(obj));
let newArr = keysObj.flatMap((arr) => arr);
let uniqueKeys = [...new Set(newArr)];

books.forEach((el) => {
  try {
    const missingKeys = uniqueKeys.filter((key) => !(key in el));
    if (missingKeys.length > 0) {
      throw new Error(`Missing keys: ${missingKeys.join(", ")}`);
    }

    let ul = document.createElement("ul");
    Object.entries(el).forEach(([key, value]) => {
      let li = document.createElement("li");
      li.textContent = `${key}: ${value}`;
      ul.appendChild(li);
    });

    fragment.appendChild(ul);
  } catch (error) {
    console.error(error.message, el);
  }

  root.appendChild(fragment);
});
