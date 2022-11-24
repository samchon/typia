import TSON from "../../../src";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_undefined = _test_is_stringify(
    "null",
    () => undefined,
    TSON.createIsStringify<undefined>(),
);
