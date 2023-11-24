import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type DynamicArray = IPointer<{
  [key: string]: string[];
}>;
export namespace DynamicArray {
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
