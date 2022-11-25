import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_native_simple = _test_is_clone(
    "simple native",
    NativeSimple.generate,
    TSON.createIsClone<NativeSimple>(),
    NativeSimple.SPOILERS,
);
