import TSON from "../../../src";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_undefined = _test_assert_stringify(
    "null",
    () => undefined,
    (input) => TSON.assertStringify(input),
);
