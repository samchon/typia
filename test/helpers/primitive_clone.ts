import { Primitive } from "typia/lib/Primitive";

export function primitive_clone<T>(input: T): Primitive<T> {
    if (input === undefined) return undefined!;
    return JSON.parse(JSON.stringify(input));
}
