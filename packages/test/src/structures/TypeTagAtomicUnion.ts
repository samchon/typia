import typia from "typia";

import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type TypeTagAtomicUnion = IPointer<TypeTagAtomicUnion.Type[]>;
export namespace TypeTagAtomicUnion {
  export interface Type {
    value:
      | (number & typia.tags.Minimum<3>)
      | (string & typia.tags.MinLength<3> & typia.tags.MaxLength<7>);
  }
  export function generate(): TypeTagAtomicUnion {
    const output: Type[] = [];
    for (const value of [3, 7])
      output.push({ value: TestRandomGenerator.string(value) });
    output.push({ value: 3 });
    return { value: output };
  }
  export const SPOILERS: Spoiler<TypeTagAtomicUnion>[] = [
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
