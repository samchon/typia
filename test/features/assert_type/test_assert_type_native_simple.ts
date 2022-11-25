import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_native_simple = _test_assert_type(
    "simple native",
    NativeSimple.generate,
    (input) => TSON.assertType(input),
    NativeSimple.SPOILERS,
);
