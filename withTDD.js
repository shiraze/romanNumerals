export function getRomanNumeral(n) {
  //  I, V, X, L, C, D, and M, standing respectively for
  //  1, 5, 10, 50, 100, 500, and 1,000.
  if (n >= 1000) return "M" + getRomanNumeral(n - 1000);
  if (n >= 900) return "DM" + getRomanNumeral(n - 900);
  if (n >= 500) return "D" + getRomanNumeral(n - 500);
  if (n >= 400) return "CD" + getRomanNumeral(n - 400);
  if (n >= 100) return "C" + getRomanNumeral(n - 100);
  if (n >= 50) return "L" + getRomanNumeral(n - 50);
  if (n >= 40) return "XL" + getRomanNumeral(n - 40);
  if (n >= 10) return "X" + getRomanNumeral(n - 10);
  if (n >= 9) return "IX" + getRomanNumeral(n - 9);
  if (n >= 5) return "V" + getRomanNumeral(n - 5);
  if (n >= 4) return "IV" + getRomanNumeral(n - 4);

  return "I".repeat(n);
}
