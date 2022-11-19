const numerals = [
  { num: 1000, char: "M" },
  { num: 900, char: "CM" },
  { num: 500, char: "D" },
  { num: 400, char: "CD" },
  { num: 100, char: "C" },
  { num: 90, char: "XC" },
  { num: 50, char: "L" },
  { num: 40, char: "XL" },
  { num: 10, char: "X" },
  { num: 9, char: "IX" },
  { num: 5, char: "V" },
  { num: 4, char: "IV" },
];
export function getRomanNumeral(n) {
  //  I, V, X, L, C, D, and M, standing respectively for
  //  1, 5, 10, 50, 100, 500, and 1,000.

  const checkNumeral = numerals.find((numeral) => n >= numeral.num);
  if (checkNumeral) {
    return checkNumeral.char + getRomanNumeral(n - checkNumeral.num);
  }

  return "I".repeat(n);
}
