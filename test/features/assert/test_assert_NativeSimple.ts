import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_assert_NativeSimple = _test_assert(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.assert(input),
    NativeSimple.SPOILERS,
);
