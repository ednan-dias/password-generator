export const characters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

characters.map(c => characters.push(c.toUpperCase()))

for (let c = 0; c < 10; c++) {
  characters.push(c.toString())
}

['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', '{', ']', '}', '|', ':', ';', '<', ',', '.', '>', '?', '/'].map(val => characters.push(val))