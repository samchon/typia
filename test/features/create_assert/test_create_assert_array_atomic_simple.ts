import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_array_atomic_simple = _test_assert(
    "atomic array",
    ArrayAtomicSimple.generate,
    TSON.createAssert<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
