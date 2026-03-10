import typia from "typia";

describe("typia.is", () => {
  it("should return true for valid type", () => {
    expect(typia.is<number>(3)).toBeTruthy();
  });

  it("should return false for invalid type", () => {
    expect(typia.is<number>("3")).toBeFalsy();
  });
});
