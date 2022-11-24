import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_array_atomic_simple = _test_clone(
    "atomic array",
    ArrayAtomicSimple.generate,
    TSON.createClone<ArrayAtomicSimple>(),
);
