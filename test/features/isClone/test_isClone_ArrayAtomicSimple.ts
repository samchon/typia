import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ArrayAtomicSimple = _test_isClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => TSON.isClone(input),
    ArrayAtomicSimple.SPOILERS,
);