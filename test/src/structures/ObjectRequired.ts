import { Spoiler } from "../helpers/Spoiler";

export type ObjectRequired = Required<ObjectRequired.IBase>;
export namespace ObjectRequired {
  export const RECURSIVE = true;

  export interface IBase {
    boolean?: boolean;
    number?: number;
    string?: string;
    array?: number[];
    object?: IBase | null;
  }

  export function generate(level: number = 0): ObjectRequired {
    return {
      boolean: false,
      number: 2,
      string: "three",
      array: [0, 1, 2],
      object: level < 2 ? generate(level + 1) : null,
    };
  }

  export const SPOILERS: Spoiler<ObjectRequired>[] = [
    (input) => {
      input.boolean = undefined!;
      return ["$input.boolean"];
    },
    (input) => {
      input.number = undefined!;
      return ["$input.number"];
    },
    (input) => {
      input.string = undefined!;
      return ["$input.string"];
    },
    (input) => {
      input.array = undefined!;
      return ["$input.array"];
    },
    (input) => {
      input.object = undefined!;
      return ["$input.object"];
    },
  ];
}
