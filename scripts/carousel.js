const animals = [
  {
    name: "Lions",
    count: 2,
    image: "/zoo-project/imgs/lion.jpg",
  },
  {
    name: "Turkeys",
    count: 10,
    image:
      "/zoo-project/imgs/turkey.jpg",
  },
  {
    name: "Camels",
    count: 2,
    image:
      "/zoo-project/imgs/camel.png",
  },
  {
    name: "Asian Elephant",
    count: 1,
    image:
      "/zoo-project/imgs/elephant.jpeg",
  },
  {
    name: "Tiger",
    count: 1,
    image:
      "/zoo-project/imgs/tiger.jpg",
  },
  {
    name: "Reptile House",
    count: 1,
    image:
      "/zoo-project/imgs/reptile.jpg",
  },
  {
    name: "Bird House",
    count: 1,
    image: "/zoo-project/imgs/bird_house.jpg",
  },
  {
    name: "Seals",
    count: 2,
    image:
      "/zoo-project/imgs/seal.jpeg",
  },
  {
    name: "Whale",
    count: 1,
    image: "/zoo-project/imgs/bluewhale.jpg",
  },
  {
    name: "Monkeys",
    count: 2,
    image:
      "/zoo-project/imgs/monkey.jpeg",
  },
  {
    name: "Cows",
    count: 3,
    image:
      "/zoo-project/imgs/cow.jpeg",
  },
];

let currentIndex = 0;
const animalImage = document.getElementById("animalImage");
const animalLabel = document.getElementById("animalLabel");
const animalCount = document.getElementById("animalCount");
const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateCarousel() {
  const current = animals[currentIndex];
  animalImage.src = current.image;
  animalImage.alt = current.name;
  animalLabel.textContent = current.name;
  animalCount.textContent = `Quantity: ${current.count}`;
  counter.textContent = `${currentIndex + 1} / ${animals.length}`;

  animalImage.style.animation = "none";
  setTimeout(() => {
    animalImage.style.animation = "fadeIn 0.5s ease-out";
  }, 10);
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + animals.length) % animals.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % animals.length;
  updateCarousel();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevBtn.click();
  } else if (e.key === "ArrowRight") {
    nextBtn.click();
  }
});

updateCarousel();
