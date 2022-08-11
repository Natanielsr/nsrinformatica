// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Computador Gamer",
    duration: "",
    thumb: "images/pc-gamer-thumb.jpg",
    video_id: "Vz1xwOWme1Q"
  },
  {
    title: "Computador de Escritório",
    duration: "",
    thumb: "images/pc-office-thumb.png",
    video_id: "fK2PzP5pbY8"
  },
  {
    title: "Limpeza e Troca de Pasta Térmica",
    duration: "",
    thumb: "images/termic-thumb.jpg",
    video_id: "HDg2ReOm7Us"
  },
  {
    title: "Montagem de Componentes",
    duration: "",
    thumb: "images/hardware-thumb.png",
    video_id: "1xgL2lRNnSE"
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});




// MENU RESPONSIVO