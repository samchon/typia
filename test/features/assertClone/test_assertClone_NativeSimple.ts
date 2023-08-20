import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_assertClone_NativeSimple = _test_assertClone(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.assertClone<NativeSimple>(input),
    NativeSimple.SPOILERS,
);
