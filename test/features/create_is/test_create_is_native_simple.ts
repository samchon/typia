import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_is } from "../internal/_test_is";

export const test_create_is_native_simple = _test_is(
    "simple native",
    NativeSimple.generate,
    TSON.createIs<NativeSimple>(),
    NativeSimple.SPOILERS,
);
