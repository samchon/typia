import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createIsClone_NativeSimple = _test_isClone(
    "NativeSimple",
    NativeSimple.generate,
    typia.createIsClone<NativeSimple>(),
    NativeSimple.SPOILERS,
);
