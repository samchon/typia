import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";

export type ArrayRepeatedUnionWithTuple =
  | boolean
  | number
  | string[]
  | ArrayRepeatedUnionWithTuple[]
  | ArrayRepeatedUnionWithTuple.IBox3D[]
  | [string, number, boolean]
  | [ArrayRepeatedUnionWithTuple.IBox3D, ArrayRepeatedUnionWithTuple.IPoint3D];
export namespace ArrayRepeatedUnionWithTuple {
  export const RECURSIVE = true;

  export interface IBox3D {
    scale: IPoint3D;
    position: IPoint3D;
    rotate: IPoint3D;
    pivot: IPoint3D;
  }
  export interface IPoint3D {
    x: number;
    y: number;
    z: number;
  }

  export function generate(): ArrayRepeatedUnionWithTuple {
    const random = typia.createRandom<ArrayRepeatedUnionWithTuple>();
    return [
      false,
      1,
      ["two", "three", "four"],
      [true, 2, ["three", "four", "five"], [typia.random<IBox3D>()]],
      [
        typia.random<IBox3D>(),
        typia.random<IBox3D>(),
        typia.random<IBox3D>(),
        typia.random<IBox3D>(),
      ],
      ["three", 2, true],
      [[[typia.random<IBox3D>(), typia.random<IPoint3D>()]]],
      ...new Array(100).fill("").map(random),
    ];
  }

  export const ADDABLE: boolean = false;
  export const SPOILERS: Spoiler<ArrayRepeatedUnionWithTuple>[] = [
    (input) => {
      (input as any)[0] = undefined!;
      return ["$input"];
    },
    (input) => {
      (input as any)[1] = null!;
      return ["$input[1]"];
    },
    (input) => {
      (input as any)[2][2] = 1;
      return ["$input[2][2]"];
    },
    (input) => {
      (input as any)[3][3][0] = typia.random<IPoint3D>();
      return ["$input[3][3]"];
    },
    (input) => {
      (input as any)[4][0].pivot = null;
      return ["$input[4]"];
    },
    (input) => {
      (input as any)[5][2] = 1;
      return ["$input[5][1]", "$input[5][2]"]; // understands as string[] type
    },
    (input) => {
      (input as any)[6][0][0][0] = typia.random<IPoint3D>();
      return ["$input[6]"];
    },
  ];
  export const BINARABLE = false;
}
