import typia from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_NativeSimple = _test_isClone(
    "NativeSimple",
    NativeSimple.generate,
    typia.createIsClone<NativeSimple>(),
    NativeSimple.SPOILERS,
);