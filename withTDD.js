export function getRomanNumeral(n) {
  //  I, V, X, L, C, D, and M, standing respectively for
  //  1, 5, 10, 50, 100, 500, and 1,000.
  if (n >= 50) return "L" + getRomanNumeral(n - 50);
  if (n >= 40) return "XL" + getRomanNumeral(n - 40);
  if (n >= 10) return "X" + getRomanNumeral(n - 10);
  if (n == 9) return "IX";
  if (n >= 5) return "V" + getRomanNumeral(n - 5);
  if (n == 4) return "IV";

  return "I".repeat(n);
}
