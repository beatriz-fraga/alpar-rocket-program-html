const roomBtn = document.getElementById("room");
const roomResult = document.querySelector(".room");
const kitchenBtn = document.getElementById("kitchen");
const kitchenResult = document.querySelector(".kitchen");
const bathroomBtn = document.getElementById("bathroom");
const bathroomResult = document.querySelector(".bathroom");
const bedroomBtn = document.getElementById("bedroom");
const bedroomResult = document.querySelector(".bedroom");
const balconyBtn = document.getElementById("balcony");
const balconyResult = document.querySelector(".balcony");
const laundryBtn = document.getElementById("laundry");
const laundryResult = document.querySelector(".laundry");
const onOffBtn = document.getElementById("onoff");

roomBtn.addEventListener("click", () => {
  ControleIluminacao.instance.toggle("sala");
});

ControleIluminacao.instance.addEventListener(() => {
  if (ControleIluminacao.instance.sala) {
    roomResult.classList.add("active");
  } else {
    roomResult.classList.remove("active");
  }
});

kitchenBtn.addEventListener("click", () => {
  ControleIluminacao.instance.toggle("cozinha");
});

ControleIluminacao.instance.addEventListener(() => {
  if (ControleIluminacao.instance.cozinha) {
    kitchenResult.classList.add("active");
  } else {
    kitchenResult.classList.remove("active");
  }
});

bathroomBtn.addEventListener("click", () => {
  ControleIluminacao.instance.toggle("banheiro");
});

ControleIluminacao.instance.addEventListener(() => {
  if (ControleIluminacao.instance.banheiro) {
    bathroomResult.classList.add("active");
  } else {
    bathroomResult.classList.remove("active");
  }
});

bedroomBtn.addEventListener("click", () => {
  ControleIluminacao.instance.toggle("quarto");
});

ControleIluminacao.instance.addEventListener(() => {
  if (ControleIluminacao.instance.quarto) {
    bedroomResult.classList.add("active");
  } else {
    bedroomResult.classList.remove("active");
  }
});

balconyBtn.addEventListener("click", () => {
  ControleIluminacao.instance.toggle("varanda");
});

ControleIluminacao.instance.addEventListener(() => {
  if (ControleIluminacao.instance.varanda) {
    balconyResult.classList.add("active");
  } else {
    balconyResult.classList.remove("active");
  }
});

laundryBtn.addEventListener("click", () => {
  ControleIluminacao.instance.toggle("lavanderia");
});

ControleIluminacao.instance.addEventListener(() => {
  if (ControleIluminacao.instance.lavanderia) {
    laundryResult.classList.add("active");
  } else {
    laundryResult.classList.remove("active");
  }
});

onOffBtn.addEventListener("click", () => {
  ControleIluminacao.instance.toggle("todos");
});

ControleIluminacao.instance.addEventListener(() => {
  if (ControleIluminacao.instance.todos) {
    roomResult.classList.add("active");
    kitchenResult.classList.add("active");
    bathroomResult.classList.add("active");
    bedroomResult.classList.add("active");
    balconyResult.classList.add("active");
    laundryResult.classList.add("active");
  } else {
    roomResult.classList.remove("active");
    kitchenResult.classList.remove("active");
    bathroomResult.classList.remove("active");
    bedroomResult.classList.remove("active");
    balconyResult.classList.remove("active");
    laundryResult.classList.remove("active");
  }
});
