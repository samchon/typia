import typia from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_NativeSimple = _test_assertClone(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.assertClone(input),
    NativeSimple.SPOILERS,
);