import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_NativeSimple = _test_assertStringify(
    "NativeSimple",
    NativeSimple.generate,
    TSON.createAssertStringify<NativeSimple>(),
    NativeSimple.SPOILERS,
);