const animals = [
  {
    name: "Lions",
    count: 2,
    image:
      "",
  },
  {
    name: "Turkeys",
    count: 10,
    image:
      "https://images.unsplash.com/photo-1574116294627-a5e5a6a83c9e?w=800&h=600&fit=crop",
  },
  {
    name: "Camels",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop",
  },
  {
    name: "Asian Elephant",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop",
  },
  {
    name: "Tiger",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&h=600&fit=crop",
  },
  {
    name: "Reptile House",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1549471053-23e0c1e05921?w=800&h=600&fit=crop",
  },
  {
    name: "Bird House",
    count: 1,
    image: "./imgs/bird_house.jpg",
  },
  {
    name: "Seals",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=600&fit=crop",
  },
  {
    name: "Whale",
    count: 1,
    image: "./imgs/bluewhale.jpg",
  },
  {
    name: "Monkeys",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&h=600&fit=crop",
  },
  {
    name: "Cows",
    count: 3,
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop",
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
