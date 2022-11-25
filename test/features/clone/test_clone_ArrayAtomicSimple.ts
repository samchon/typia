import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ArrayAtomicSimple = _test_clone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => TSON.clone(input),
);
