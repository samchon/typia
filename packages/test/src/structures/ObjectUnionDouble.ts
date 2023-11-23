import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ObjectUnionDouble = ObjectUnionDouble.Union[];
export namespace ObjectUnionDouble {
  export type Union = IA | IB;

  export interface IA {
    value: { x: number };
    child: IAA | IAB;
  }
  export interface IAA {
    value: { y: boolean };
  }
  export interface IAB {
    value: { y: number };
  }

  export interface IB {
    value: { x: string };
    child: IBA | IBB;
  }
  export interface IBA {
    value: { y: string };
  }
  export interface IBB {
    value: { y: number[] };
  }

  export function generate(): ObjectUnionDouble {
    return [
      {
        value: { x: TestRandomGenerator.integer() },
        child: {
          value: { y: TestRandomGenerator.boolean() },
        },
      },
      {
        value: { x: TestRandomGenerator.integer() },
        child: {
          value: { y: TestRandomGenerator.integer() },
        },
      },
      {
        value: { x: TestRandomGenerator.string() },
        child: {
          value: { y: TestRandomGenerator.string() },
        },
      },
      {
        value: { x: TestRandomGenerator.string() },
        child: {
          value: {
            y: TestRandomGenerator.array(() => TestRandomGenerator.integer()),
          },
        },
      },
    ];
  }

  export const SPOILERS: Spoiler<ObjectUnionDouble>[] = [
    (input) => {
      input[0]!.value = "string" as any;
      return ["$input[0]"];
    },
    (input) => {
      input[1]!.child.value.y = "string" as any;
      return ["$input[1]"];
    },
    (input) => {
      input[2]!.child.value.y = 0 as any;
      return ["$input[2]"];
    },
    (input) => {
      input[3]!.child.value.y = false as any;
      return ["$input[3]"];
    },
  ];

  export const BINARABLE = false;
}
