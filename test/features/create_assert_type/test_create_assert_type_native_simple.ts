import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_native_simple = _test_assert_type(
    "simple native",
    NativeSimple.generate,
    TSON.createAssertType<NativeSimple>(),
    NativeSimple.SPOILERS,
);
