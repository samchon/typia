import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_array_atomic_simple = _test_assert_stringify(
    "atomic array",
    ArrayAtomicSimple.generate,
    (input) => TSON.assertStringify(input),
    ArrayAtomicSimple.SPOILERS,
);
