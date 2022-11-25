import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_array_atomic_simple = _test_assert_type(
    "atomic array",
    ArrayAtomicSimple.generate,
    (input) => TSON.assertType(input),
    ArrayAtomicSimple.SPOILERS,
);
