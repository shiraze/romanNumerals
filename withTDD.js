export function getRomanNumeral(n) {
  if (n > 10) return "X" + getRomanNumeral(n - 10);
  if (n == 10) return "X";
  if (n == 9) return "IX";

  if (n > 5) return "V" + getRomanNumeral(n - 5);
  if (n == 5) return "V";
  if (n == 4) return "IV";

  return "I".repeat(n);
}
