import { Primitive } from "../Primitive";

export const $clone = <T>(value: T): Primitive<T> =>
    JSON.parse(JSON.stringify(value));
