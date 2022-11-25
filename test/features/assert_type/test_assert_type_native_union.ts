import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_native_union = _test_assert_type(
    "union native",
    NativeUnion.generate,
    (input) => TSON.assertType(input),
    NativeUnion.SPOILERS,
);
