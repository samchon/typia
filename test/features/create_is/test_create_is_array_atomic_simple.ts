import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_is } from "../internal/_test_is";

export const test_create_is_array_atomic_simple = _test_is(
    "atomic array",
    ArrayAtomicSimple.generate,
    TSON.createIs<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
