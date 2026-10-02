import { Spoiler } from "../utils/Spoiler";

/**
 * Supplies records whose closure field mixes nullish, primitive and callable
 * values.
 */
export type FunctionalPropertyUnion = FunctionalPropertyUnion.IUnion[];
export namespace FunctionalPropertyUnion {
  export const BINARABLE = false;
  export const JSONABLE = false;
  export const PRIMITIVE = false;
  export const RESOLVABLE = false;

  /** Declares required name and the nullable/undefinable closure-value union. */
  export interface IUnion {
    name: string;
    closure: undefined | null | number | string | ((...args: any[]) => any);
  }
  /** Constructs five fresh records covering every declared closure alternative. */
  export function generate(): FunctionalPropertyUnion {
    return [undefined, null, 1, "two", console.log].map((closure) => ({
      name: "name",
      closure,
    }));
  }

  export const SPOILERS: Spoiler<FunctionalPropertyUnion>[] = [
    (input) => {
      input[0]!.closure = {} as any;
      return ["$input[0].closure"];
    },
    (input) => {
      input[1]!.closure = [] as any;
      return ["$input[1].closure"];
    },
  ];
}
