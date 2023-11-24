import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ObjectGeneric = [
  ObjectGeneric.ISomething<boolean>,
  ObjectGeneric.ISomething<number>,
  ObjectGeneric.ISomething<string>,
];
export namespace ObjectGeneric {
  export interface ISomething<T> {
    value: T;
    child: IChild<T>;
    elements: IChild<T>[];
  }
  export interface IChild<V, N = V> {
    child_value: V;
    child_next: N;
  }

  export function generate(): ObjectGeneric {
    return [
      individual(TestRandomGenerator.boolean),
      individual(TestRandomGenerator.integer),
      individual(TestRandomGenerator.string),
    ];
  }
  function individual<T>(value: () => T): ISomething<T> {
    return {
      value: value(),
      child: {
        child_next: value(),
        child_value: value(),
      },
      elements: TestRandomGenerator.array(() => ({
        child_next: value(),
        child_value: value(),
      })),
    };
  }

  export const SPOILERS: Spoiler<ObjectGeneric>[] = [
    (input) => {
      input[0].value = 1 as any;
      return ["$input[0].value"];
    },
    (input) => {
      input[1].child.child_next = "something" as any;
      return ["$input[1].child.child_next"];
    },
    (input) => {
      input[2].elements[0] = true as any;
      return ["$input[2].elements[0]"];
    },
    (input) => {
      input[2].elements = {} as any;
      return ["$input[2].elements"];
    },
  ];

  export const BINARABLE = false;
}
