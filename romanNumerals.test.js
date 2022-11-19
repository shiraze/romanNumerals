import { getRomanNumeral } from "./withTDD";

describe("getRomanNumeral", () => {
  it("should return I when 1 is supplied", () => {
    expect(getRomanNumeral(1)).toBe("I");
  });
  it("should return II when 2 is supplied", () => {
    expect(getRomanNumeral(2)).toBe("II");
  });
  it("should return V when 5 is supplied", () => {
    expect(getRomanNumeral(5)).toBe("V");
  });
  it("should return VIII when 8 is supplied", () => {
    expect(getRomanNumeral(6)).toBe("VI");
  });
  it("should return VIII when 8 is supplied", () => {
    expect(getRomanNumeral(8)).toBe("VIII");
  });
  it("should return IX when 9 is supplied", () => {
    expect(getRomanNumeral(9)).toBe("IX");
  });
  it("should return X when 10 is supplied", () => {
    expect(getRomanNumeral(10)).toBe("X");
  });
  it("should return XIII when 13 is supplied", () => {
    expect(getRomanNumeral(13)).toBe("XIII");
  });
  it("should return XIV when 14 is supplied", () => {
    expect(getRomanNumeral(14)).toBe("XIV");
  });
  it("should return XX when 20 is supplied", () => {
    expect(getRomanNumeral(20)).toBe("XX");
  });
  it("should return XXXVIII when 38 is supplied", () => {
    expect(getRomanNumeral(38)).toBe("XXXVIII");
  });
  it("should return XL when 40 is supplied", () => {
    expect(getRomanNumeral(40)).toBe("XL");
  });
  it("should return L when 50 is supplied", () => {
    expect(getRomanNumeral(50)).toBe("L");
  });
  it("should return XLIX when 49 is supplied", () => {
    expect(getRomanNumeral(49)).toBe("XLIX");
  });
  it("should return LXXXIV when 84 is supplied", () => {
    expect(getRomanNumeral(84)).toBe("LXXXIV");
  });
  it("should return LXLVI when 96 is supplied", () => {
    expect(getRomanNumeral(96)).toBe("LXLVI");
  });
  it("should return CC when 200 is supplied", () => {
    expect(getRomanNumeral(200)).toBe("CC");
  });
  it("should return CDLXXXIII when 483 is supplied", () => {
    expect(getRomanNumeral(483)).toBe("CDLXXXIII");
  });
  it("should return DMLXXXIII when 982 is supplied", () => {
    expect(getRomanNumeral(982)).toBe("DMLXXXII");
  });
  it("should return MMMDCCXXIV when 3724 is supplied", () => {
    expect(getRomanNumeral(3724)).toBe("MMMDCCXXIV");
  });
});
