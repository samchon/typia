import { Spoiler } from "../utils/Spoiler";

export interface ObjectHttpUndefindable {
  boolean: boolean | undefined;
  bigint: bigint | undefined;
  number: number | undefined;
  string: string | undefined;

  constantBoolean: true | undefined;
  constantBigint: 1n | 2n | 3n | undefined;
  constantNumber: 1 | 2 | 3 | undefined;
  constantString: "one" | "two" | "three" | undefined;
}
export namespace ObjectHttpUndefindable {
  export const HEADERS = true;
  export const QUERY = true;
  export const JSONABLE = false;

  export function generate(): ObjectHttpUndefindable {
    return {
      boolean: undefined,
      bigint: 1n,
      number: 2,
      string: "three",

      constantBoolean: true,
      constantBigint: 2n,
      constantNumber: undefined,
      constantString: "three",
    };
  }

  export const SPOILERS: Spoiler<ObjectHttpUndefindable>[] = [
    (input) => {
      input.boolean = "N" as any;
      return ["$input.boolean"];
    },
    (input) => {
      input.bigint = "one" as any;
      return ["$input.bigint"];
    },
    (input) => {
      input.number = "two" as any;
      return ["$input.number"];
    },
    (input) => {
      input.constantBoolean = false as any;
      return ["$input.constantBoolean"];
    },
    (input) => {
      input.constantBigint = -1n as any;
      return ["$input.constantBigint"];
    },
    (input) => {
      input.constantNumber = 1.5 as any;
      return ["$input.constantNumber"];
    },
    (input) => {
      input.constantString = "four" as any;
      return ["$input.constantString"];
    },
  ];
}
