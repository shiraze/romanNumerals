function getRomanNumeral(n) {
  let r = n;
  const Ms = Math.floor(r / 1000);
  r -= Ms * 1000;
  const Ds = Math.floor(r / 500);
  r -= Ds * 500;
  const Cs = Math.floor(r / 100);
  r -= Cs * 100;
  const Ls = Math.floor(r / 50);
  r -= Ls * 50;
  const Xs = Math.floor(r / 10);
  r -= Xs * 10;
  const Vs = Math.floor(r / 5);
  r -= Vs * 5;
  const Is = r;

  const basic =
    "M".repeat(Ms) +
    "D".repeat(Ds) +
    "C".repeat(Cs) +
    "L".repeat(Ls) +
    "X".repeat(Xs) +
    "V".repeat(Vs) +
    "I".repeat(Is);

  return basic
    .replace("DCCCC", "CM")
    .replace("CCCC", "CD")
    .replace("LXXXX", "XC")
    .replace("XXXX", "XL")
    .replace("VIIII", "IX")
    .replace("IIII", "IV");
}
