import TSON from "../../../src";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_null = _test_is_stringify(
    "null",
    () => null,
    (input) => TSON.isStringify(input),
);
