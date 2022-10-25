import TSON from "../../../src";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_tuple_closed_by_null = _test_is_stringify(
    "tuple closed by null",
    () => [1, 3, null] as const,
    TSON.createIsStringify<readonly [1, 3, null]>(),
);
