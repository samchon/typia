import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_array_atomic_simple = _test_assert_type(
    "atomic array",
    ArrayAtomicSimple.generate,
    TSON.createAssertType<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
