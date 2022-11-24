import { MapSimple } from "./MapSimple";

export interface MapAlias {
    boolean: MapAlias.MAP<boolean, number>;
    number: MapAlias.MAP<number, number>;
    strings: MapAlias._Map<string, number>;
    arrays: MapAlias._Map<number[], number>;
    objects: MapAlias.MAP<MapAlias.Person, number>;
}
export namespace MapAlias {
    export type MAP<K, V> = _Map<K, V>;
    export type _Map<K, V> = Map<K, V>;

    export interface Person {
        id: string;
        name: string;
        age: number;
    }

    export function generate(): MapAlias {
        return {
            boolean: new Map([
                [true, 1],
                [false, 2],
            ]),
            number: new Map([
                [1, 1],
                [2, 2],
                [3, 3],
            ]),
            strings: new Map([
                ["a", 1],
                ["b", 2],
                ["c", 3],
            ]),
            arrays: new Map([
                [[1, 2, 3], 1],
                [[4, 5, 6], 2],
            ]),
            objects: new Map([
                [{ id: "1", name: "John", age: 20 }, 1],
                [{ id: "2", name: "Jane", age: 21 }, 2],
            ]),
        };
    }

    export const SPOILERS = () => MapSimple.SPOILERS;
}
