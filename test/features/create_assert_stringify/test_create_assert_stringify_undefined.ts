import TSON from "../../../src";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_undefined = _test_assert_stringify(
    "null",
    () => undefined,
    TSON.createAssertStringify<typeof undefined>(),
);
