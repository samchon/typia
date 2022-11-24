import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_array_atomic_simple = _test_is_stringify(
    "atomic array",
    ArrayAtomicSimple.generate,
    TSON.createIsStringify<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
