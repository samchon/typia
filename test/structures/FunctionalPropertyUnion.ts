export type FunctionalPropertyUnion = FunctionalPropertyUnion.IUnion[];
export namespace FunctionalPropertyUnion {
    export interface IUnion {
        name: string;
        closure: undefined | null | number | string | ((...args: any[]) => any);
    }
    export function generate(): FunctionalPropertyUnion {
        return [undefined, null, 1, "two", console.log].map((closure) => ({
            name: "name",
            closure,
        }));
    }
}
