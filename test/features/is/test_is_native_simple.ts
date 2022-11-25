import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_native_simple = _test_is(
    "simple native",
    NativeSimple.generate,
    (input) => TSON.is(input),
    NativeSimple.SPOILERS,
);
