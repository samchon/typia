import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createIs_NativeSimple = _test_is(
    "NativeSimple",
    NativeSimple.generate,
    typia.createIs<NativeSimple>(),
    NativeSimple.SPOILERS,
);
