import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ArrayAtomicSimple = _test_assert(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    TSON.createAssert<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
