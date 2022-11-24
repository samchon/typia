import TSON from "../../../src";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_null = _test_assert_stringify(
    "null",
    () => null,
    TSON.createAssertStringify<null>(),
);
