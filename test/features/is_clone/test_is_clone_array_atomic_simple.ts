import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_array_atomic_simple = _test_is_clone(
    "atomic array",
    ArrayAtomicSimple.generate,
    (input) => TSON.isClone(input),
    ArrayAtomicSimple.SPOILERS,
);
