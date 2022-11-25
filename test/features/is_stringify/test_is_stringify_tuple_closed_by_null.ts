import TSON from "../../../src";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_tuple_closed_by_null = _test_is_stringify(
    "tuple closed by null",
    () => [1, 3, null] as const,
    (input) => TSON.isStringify(input),
);
