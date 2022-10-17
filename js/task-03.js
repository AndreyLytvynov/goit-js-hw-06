const images = [
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
];

const galeryMurkup = images
  .map((el) => {
    return `
  <li class='galery__item'>
<img class='galery__image' src="${el.url}" alt="${el.alt}"> 
  </li>
  `;
  })
  .join("");

const galeryEl = document.querySelector(".gallery");
galeryEl.insertAdjacentHTML("afterbegin", `${galeryMurkup}`);
