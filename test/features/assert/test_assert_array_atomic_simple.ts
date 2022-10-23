import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assert } from "./_test_assert";

export const test_assert_array_atomic_simple = _test_assert(
    "atomic array",
    ArrayAtomicSimple.generate,
    (input) => TSON.assertType(input),
    ArrayAtomicSimple.SPOILERS,
);
