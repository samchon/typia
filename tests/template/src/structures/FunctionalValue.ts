/** Supplies an unrestricted callable fixture value. */
export type FunctionalValue = (...args: any[]) => any;
export namespace FunctionalValue {
  /** Supplies the existing platform console.log function as valid input. */
  export function generate(): FunctionalValue {
    return console.log;
  }

  export const BINARABLE = false;
  export const JSONABLE = false;
  export const RESOLVABLE = false;
  export const PRIMITIVE = false;
}
