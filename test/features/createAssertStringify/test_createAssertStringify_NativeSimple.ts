import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createAssertStringify_NativeSimple = _test_assertStringify(
    "NativeSimple",
    NativeSimple.generate,
    typia.createAssertStringify<NativeSimple>(),
    NativeSimple.SPOILERS,
);
