import typia from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_NativeSimple = _test_assertStringify(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.assertStringify(input),
    NativeSimple.SPOILERS,
);