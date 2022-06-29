export type FunctionalTuple = [
    FunctionalTuple.Funtional,
    FunctionalTuple.Funtional,
    FunctionalTuple.Funtional,
];
export namespace FunctionalTuple {
    export type Funtional = (...args: any[]) => any;
    export function generate(): FunctionalTuple {
        return [console.log, console.log, console.log];
    }
}
