import { Primitive } from "../typings/Primitive";

export const $clone = <T>(value: T): Primitive<T> =>
    JSON.parse(JSON.stringify(value));
