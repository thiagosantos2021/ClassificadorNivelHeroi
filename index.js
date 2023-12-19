let nome = "Chapolin Colorado"
let xp = 15000

const heroi = [nome, xp]

console.log(heroi)

let nivel

if (xp < 1.000) {
  nivel = "Ferro"
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
  nivel = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal"
} else if (xp > 10000) {
  nivel = "Radiante"
}

console.log(`O Herói de nome ${nome}, está no nível ${nivel}.`)
