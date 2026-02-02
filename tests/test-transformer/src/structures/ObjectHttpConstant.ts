import { Spoiler } from "../utils/Spoiler";

export interface ObjectHttpConstant {
  boolean: false;
  bigint: 1n | 99n;
  number: 2 | 98;
  string: "three" | "ninety-seven" | "something";
  template: `abcd_${string}`;
}
export namespace ObjectHttpConstant {
  export const HEADERS = true;
  export const QUERY = true;
  export const JSONABLE = false;

  export function generate(): ObjectHttpConstant {
    return {
      boolean: false,
      bigint: 1n,
      number: 98,
      string: "something",
      template: "abcd_something",
    };
  }

  export const SPOILERS: Spoiler<ObjectHttpConstant>[] = [
    (input) => {
      input.boolean = true as any;
      return ["$input.boolean"];
    },
    (input) => {
      input.bigint = 2n as any;
      return ["$input.bigint"];
    },
    (input) => {
      input.number = 3 as any;
      return ["$input.number"];
    },
    (input) => {
      input.string = "fourth" as any;
      return ["$input.string"];
    },
    (input) => {
      input.template = "fwdsaf_abcd" as any;
      return ["$input.template"];
    },
  ];
}
