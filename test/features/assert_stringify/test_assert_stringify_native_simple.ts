import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_native_simple = _test_assert_stringify(
    "simple native",
    NativeSimple.generate,
    (input) => TSON.assertStringify(input),
    NativeSimple.SPOILERS,
);
