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
        return SetSimple.generate();
    }

    export const ADDABLE = false;
    export const SPOILERS = SetSimple.SPOILERS;
    export const PRIMITIVE = false;
}
