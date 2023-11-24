import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface ArrayAny {
  anys: any[];
  undefindable1: any[] | undefined;
  undefindable2: any[] | undefined;
  nullables1: any[] | null;
  nullables2: any[] | null;
  both1: any[] | undefined | null;
  both2: any[] | undefined | null;
  both3: any[] | undefined | null;
  union: Array<any | number | null>;
}
export namespace ArrayAny {
  export function generate(): ArrayAny {
    return {
      anys: TestRandomGenerator.array(random),
      undefindable1: TestRandomGenerator.array(random),
      undefindable2: undefined,
      nullables1: TestRandomGenerator.array(random),
      nullables2: null,
      both1: TestRandomGenerator.array(random),
      both2: undefined,
      both3: null,
      union: TestRandomGenerator.array(random),
    };
  }

  export const SPOILERS: Spoiler<ArrayAny>[] = [
    (input) => {
      input.anys = null!;
      return ["$input.anys"];
    },
    (input) => {
      input.undefindable1 = null!;
      return ["$input.undefindable1"];
    },
    (input) => {
      input.nullables2 = {} as any;
      return ["$input.nullables2"];
    },
    (input) => {
      input.both1 = false as any;
      return ["$input.both1"];
    },
    (input) => {
      input.both2 = 1 as any;
      return ["$input.both2"];
    },
    (input) => {
      input.both3 = "two" as any;
      return ["$input.both3"];
    },
    (input) => {
      input.union = undefined!;
      return ["$input.union"];
    },
  ];

  export const ADDABLE = false;
  export const BINARABLE = false;

  const random = () =>
    TestRandomGenerator.pick([null, true, 2, "three", {}, []]);
}
