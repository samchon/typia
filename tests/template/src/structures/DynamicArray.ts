import { IPointer } from "tstl";

import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/** Supplies a pointer to string-keyed arrays of strings. */
export type DynamicArray = IPointer<{
  [key: string]: string[];
}>;
export namespace DynamicArray {
  /** Constructs a fresh pointer with randomized string-array dictionary values. */
  export function generate(): DynamicArray {
    const output: Record<string, string[]> = {};
    for (let i: number = 0; i < 10; ++i) {
      const key: string = TestRandomGenerator.string();
      output[key] = TestRandomGenerator.array(TestRandomGenerator.string);
    }
    return { value: output };
  }
  export const SPOILERS: Spoiler<DynamicArray>[] = [
    (input) => {
      input.value["something"] = [0] as any;
      input.value["another"] = [false] as any;
      return [`$input.value.something[0]`, `$input.value.another[0]`];
    },
  ];
  export const ADDABLE = false;
  export const BINARABLE = false;
}
