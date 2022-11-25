import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_native_simple = _test_assert_equals(
    "simple native",
    NativeSimple.generate,
    TSON.createAssertEquals<NativeSimple>(),
    false,
);
