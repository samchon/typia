import TSON from "../../../src";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_null = _test_stringify(
    "null",
    () => null,
    TSON.createStringify<null>(),
);
