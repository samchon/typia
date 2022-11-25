import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_native_simple = _test_assert_clone(
    "simple native",
    NativeSimple.generate,
    TSON.createAssertClone<NativeSimple>(),
    NativeSimple.SPOILERS,
);
