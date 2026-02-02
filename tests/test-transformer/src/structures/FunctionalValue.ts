export type FunctionalValue = (...args: any[]) => any;
export namespace FunctionalValue {
  export function generate(): FunctionalValue {
    return console.log;
  }

  export const BINARABLE = false;
  export const JSONABLE = false;
  export const RESOLVABLE = false;
  export const PRIMITIVE = false;
}
