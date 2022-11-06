import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_array_atomic_simple = _test_is_clone(
    "atomic array",
    ArrayAtomicSimple.generate,
    TSON.createIsClone<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
