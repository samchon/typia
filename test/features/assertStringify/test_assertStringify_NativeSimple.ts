import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_assertStringify_NativeSimple = _test_assertStringify(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.assertStringify<NativeSimple>(input),
    NativeSimple.SPOILERS,
);
