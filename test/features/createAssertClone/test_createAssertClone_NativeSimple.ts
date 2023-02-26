import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createAssertClone_NativeSimple = _test_assertClone(
    "NativeSimple",
    NativeSimple.generate,
    typia.createAssertClone<NativeSimple>(),
    NativeSimple.SPOILERS,
);
