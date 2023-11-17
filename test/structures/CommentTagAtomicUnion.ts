import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type CommentTagAtomicUnion = IPointer<CommentTagAtomicUnion.Type[]>;
export namespace CommentTagAtomicUnion {
  export interface Type {
    /**
     * @minimum 3
     * @minLength 3
     * @maxLength 7
     */
    value: number | string;
  }
  export function generate(): CommentTagAtomicUnion {
    const output: Type[] = [];
    for (const value of [3, 7])
      output.push({ value: TestRandomGenerator.string(value) });
    output.push({ value: 3 });
    return { value: output };
  }
  export const SPOILERS: Spoiler<CommentTagAtomicUnion>[] = [
    (input) => {
      input.value[0]!.value = "12";
      return ["$input.value[0].value"];
    },
    (input) => {
      input.value[1]!.value = "12345678";
      return ["$input.value[1].value"];
    },
    (input) => {
      input.value[2]!.value = 2;
      return ["$input.value[2].value"];
    },
  ];
}
