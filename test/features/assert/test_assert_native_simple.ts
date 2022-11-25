import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_native_simple = _test_assert(
    "simple native",
    NativeSimple.generate,
    (input) => TSON.assert(input),
    NativeSimple.SPOILERS,
);
