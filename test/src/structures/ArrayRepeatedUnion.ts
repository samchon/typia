import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";

export type ArrayRepeatedUnion =
  | boolean
  | number
  | string[]
  | ArrayRepeatedUnion[]
  | ArrayRepeatedUnion.IBox3D[];
export namespace ArrayRepeatedUnion {
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

  export function generate(): ArrayRepeatedUnion {
    const random = typia.createRandom<ArrayRepeatedUnion>();
    return [
      false,
      1,
      ["two", "three", "four"],
      [
        true,
        2,
        ["three", "four", "five"],
        [typia.random<ArrayRepeatedUnion.IBox3D>()],
      ],
      [typia.random<ArrayRepeatedUnion.IBox3D>()],
      ...new Array(100).fill("").map(random),
    ];
  }

  export const ADDABLE: boolean = false;
  export const BINARABLE = false;
  export const SPOILERS: Spoiler<ArrayRepeatedUnion>[] = [
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
      (input as any)[3][3][0] = typia.random<ArrayRepeatedUnion.IPoint3D>();
      return ["$input[3][3]"];
    },
    (input) => {
      (input as any)[4][0].pivot = null;
      return ["$input[4]"];
    },
  ];
}
