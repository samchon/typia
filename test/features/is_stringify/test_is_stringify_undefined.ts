import TSON from "../../../src";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_undefined = _test_is_stringify(
    "null",
    () => undefined,
    (input) => TSON.isStringify(input),
);
