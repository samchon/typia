export type FunctionalValue = (...args: any[]) => any;
export namespace FunctionalValue {
    export function generate(): FunctionalValue {
        return console.log;
    }

    export const PRIMITIVE = false;
    export const JSONABLE = false;
}
