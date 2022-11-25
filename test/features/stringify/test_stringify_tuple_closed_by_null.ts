import TSON from "../../../src";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_tuple_closed_by_null = _test_stringify(
    "tuple closed by null",
    () => [1, 3, null] as const,
    (input) => TSON.stringify(input),
);
