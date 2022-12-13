import typia from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_NativeSimple = _test_isStringify(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.isStringify(input),
    NativeSimple.SPOILERS,
);