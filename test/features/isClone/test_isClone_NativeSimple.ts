import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_isClone_NativeSimple = _test_isClone(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.isClone<NativeSimple>(input),
    NativeSimple.SPOILERS,
);
