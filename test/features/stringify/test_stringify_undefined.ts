import TSON from "../../../src";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_undefined = _test_stringify(
    "null",
    () => undefined,
    (input) => TSON.stringify(input),
);
