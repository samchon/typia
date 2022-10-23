import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_is } from "./_test_is";

export const test_is_array_atomic_simple = _test_is(
    "atomic array",
    ArrayAtomicSimple.generate,
    (input) => TSON.is(input),
    ArrayAtomicSimple.SPOILERS,
);
