import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_NativeSimple = _test_is(
    "NativeSimple",
    NativeSimple.generate,
    TSON.createIs<NativeSimple>(),
    NativeSimple.SPOILERS,
);