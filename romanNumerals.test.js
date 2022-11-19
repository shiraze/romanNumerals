import { getRomanNumeral } from "./withTDD";

describe("getRomanNumeral", () => {
  it("should return I when 1 is supplied", () => {
    expect(getRomanNumeral(1)).toBe("I");
  });
});
