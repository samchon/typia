import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_clone } from "./_test_clone";

export const test_clone_array_atomic_simple = _test_clone(
    "atomic array",
    ArrayAtomicSimple.generate,
    (input) => TSON.clone(input),
);
