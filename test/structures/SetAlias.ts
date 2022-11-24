import { SetSimple } from "./SetSimple";

export interface SetAlias {
    booleans: SetAlias.SET<boolean>;
    numbers: SetAlias.SET<number>;
    strings: SetAlias._Set<string>;
    arrays: SetAlias._Set<Array<number>>;
    objects: SetAlias.SET<SetAlias.Person>;
}
export namespace SetAlias {
    export type SET<T> = _Set<T>;
    export type _Set<T> = Set<T>;
    export interface Person {
        id: string;
        name: string;
        age: number;
    }

    export function generate(): SetAlias {
        return {
            booleans: new Set([true, false]),
            numbers: new Set([1, 2, 3]),
            strings: new Set(["a", "b", "c"]),
            arrays: new Set([
                [1, 2, 3],
                [4, 5, 6],
            ]),
            objects: new Set([
                { id: "1", name: "John", age: 20 },
                { id: "2", name: "Jane", age: 21 },
            ]),
        };
    }

    export const SPOILERS = () => SetSimple.SPOILERS;
}
