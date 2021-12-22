let list = [
  {
    music: "./musiqa/sound1.mp3",
    name: "Magamed_Xalilov - Dusha_moya_polna.mp3",
  },
  {
    music: "./musiqa/sound2.mp3",
    name: "Estarda_Xonandalari - Yangi_Yil_Bu.mp3",
  },
  {
    music: "./musiqa/sound3.mp3",
    name: "San_Mani_Hayatim - San_Mani_Janim.mp3",
  },
  {
    music: "./musiqa/sound4.mp3",
    name: "Sadriddin - Dusha_moya_polna.mp3",
  },
  {
    music: "./musiqa/sound5.mp3",
    name: "Jaloliddin_Ahmadaliyev - Meni_Yo'qlab_Kelgan_Emushsan.mp3",
  },
  {
    music: "./musiqa/sound6.mp3",
    name: "KamiK - Moy_Ray.mp3",
  },
  {
    music: "./musiqa/sound7.mp3",
    name: "Javid - Ti_Moya_Dunya.mp3",
  },
  {
    music: "./musiqa/sound8.mp3",
    name: "Imron - Xech_Kimga_Bermay_Sevaman.mp3",
  },
];

let pause = document.querySelector("#pause");
let play = document.querySelector("#play");
let sound_name = document.querySelector("#sound_name");
let img = document.querySelector("#img");
let count = 0;

let audio = new Audio(list[count].music);

function playSound() {
  audio.play();
  play.style.display = "none";
  pause.style.display = "block";
  sound_name.innerHTML = list[0].name;
  img.style.animationName = "example";
}

function pauseSound() {
  audio.pause();
  pause.style.display = "none";
  play.style.display = "block";
  img.style.animationName = "none";
}

function nextSound() {
  if (count + 1 !== undefined) {
    audio.pause();
    count++;
    audio = new Audio(list[count].music);
    audio.play();
    play.style.display = "none";
    pause.style.display = "block";
    sound_name.innerHTML = list[count].name;
    img.style.animationName = "example";
  }
}

function prevSound() {
  if (count - 1 !== undefined) {
    audio.pause();
    count--;
    audio = new Audio(list[count].music);
    audio.play();
    play.style.display = "none";
    pause.style.display = "block";
    sound_name.innerHTML = list[count].name;
    img.style.animationName = "example";
  }
}
