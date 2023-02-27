import data from "./data";
import "./index.css";

const root = document.querySelector("#app") as HTMLElement;
const background = document.querySelector(".background-image") as HTMLElement;
const input = document.querySelector(".range") as HTMLInputElement;
const audio = document.querySelector("#audio") as HTMLAudioElement;
input.addEventListener("input", changeValue);

function change(id: number): void {
  const [item] = data.filter((item) => item.id === id);
  background.className = `background-image img_${id}`;
  const elem = root.querySelector(`.img_${id}`) as HTMLElement;
  startStopAudio(elem, item.audio);
}

function changeValue(): void {
  audio.volume = Number(input.value) / 100;
}

function startStopAudio(el: HTMLElement, src: string): void {
  if (audio.src !== src) {
    const items = root.querySelectorAll("li");    
    items.forEach((item) => (item.innerText = ""));
    audio.src = src;
    audio.play();
  } else if (audio.classList.contains("pause")) {
    audio.play();
    el.innerText = "";
    audio.classList.toggle("pause");
  } else {
    audio.pause();
    el.innerText = "II";
    audio.classList.toggle("pause");
  }
}

function renderItem(item: {id: number, title: string, bg: string}): void {
  const li = document.createElement("li") as HTMLElement;
  li.setAttribute("id", String(item.id));
  li.classList.add(`img_${item.id}`);
  li.addEventListener("click", () => change(item.id));
  root.append(li);
}

data.forEach(renderItem);
