import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_NativeSimple = _test_assert(
    "NativeSimple",
    NativeSimple.generate,
    (input) => TSON.assert(input),
    NativeSimple.SPOILERS,
);
