import TSON from "../../../src";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_null = _test_assert_stringify(
    "null",
    () => null,
    (input) => TSON.assertStringify(input),
);
