import TSON from "../../../src";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_tuple_closed_by_null = _test_stringify(
    "tuple closed by null",
    [1, 3, null],
    TSON.createStringify<[1, 3, null]>(),
);
