import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_native_simple = _test_assert_equals(
    "simple native",
    NativeSimple.generate,
    (input) => TSON.assertEquals(input),
    false,
);
