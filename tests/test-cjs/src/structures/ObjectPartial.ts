import { Spoiler } from "../helpers/Spoiler";

export type ObjectPartial = Partial<ObjectPartial.IBase>;
export namespace ObjectPartial {
  export const RECURSIVE = true;

  export interface IBase {
    boolean: boolean;
    number: number;
    string: string;
    array: number[];
    object: IBase | null;
  }

  export function generate(): ObjectPartial {
    return {};
  }

  export const SPOILERS: Spoiler<ObjectPartial>[] = [
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
      input.array = [0, 1, undefined!];
      return ["$input.array[2]"];
    },
    (input) => {
      input.object = "something" as any;
      return ["$input.object"];
    },
  ];
}
