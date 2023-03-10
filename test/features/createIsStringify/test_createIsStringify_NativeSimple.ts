import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createIsStringify_NativeSimple = _test_isStringify(
    "NativeSimple",
    NativeSimple.generate,
    typia.createIsStringify<NativeSimple>(),
    NativeSimple.SPOILERS,
);
