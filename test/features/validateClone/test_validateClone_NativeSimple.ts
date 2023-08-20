import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_validateClone_NativeSimple = _test_validateClone(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.validateClone<NativeSimple>(input),
    NativeSimple.SPOILERS,
);
