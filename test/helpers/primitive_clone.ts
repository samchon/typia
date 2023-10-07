import { Primitive } from "typia";

export function primitive_clone<T>(input: T): Primitive<T> {
    if (input === undefined) return undefined!;
    return JSON.parse(JSON.stringify(input));
}
