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
        return MapSimple.generate();
    }

    export const ADDABLE = false;
    export const PRIMITIVE = false;
    export const SPOILERS = MapSimple.SPOILERS;
}
