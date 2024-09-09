import { Spoiler } from "../helpers/Spoiler";

export type ObjectPartialAndRequired = Pick<
  Partial<ObjectPartialAndRequired.IBase>,
  "boolean" | "number" | "string"
> &
  Required<Pick<ObjectPartialAndRequired.IBase, "array" | "object">>;
export namespace ObjectPartialAndRequired {
  export const RECURSIVE = true;

  export interface IBase {
    boolean: boolean;
    number: number;
    string: string;
    array?: number[];
    object?: ObjectPartialAndRequired | null;
  }

  export function generate(level: number = 0): ObjectPartialAndRequired {
    return {
      array: [1, 2, 3],
      object: level < 2 ? generate(level + 1) : null,
    };
  }

  export const SPOILERS: Spoiler<ObjectPartialAndRequired>[] = [
    (input) => {
      input.boolean = null!;
      return ["$input.boolean"];
    },
    (input) => {
      input.number = true as any;
      return ["$input.number"];
    },
    (input) => {
      input.string = 2 as any;
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
