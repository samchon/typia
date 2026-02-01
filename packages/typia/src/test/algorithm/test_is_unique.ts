import * as std from "../../index";

export function test_is_unique(): void {
  const elements: number[] = [];
  for (let i: number = 0; i < 10; ++i) elements.push(i);

  if (std.ranges.is_unique(elements) === false)
    throw new Error("Bug on std.is_unique(): must be true but false.");

  elements.push(9);
  if (std.ranges.is_unique(elements) === true)
    throw new Error("Bug on std.is_unique(): must be false but true.");
}
