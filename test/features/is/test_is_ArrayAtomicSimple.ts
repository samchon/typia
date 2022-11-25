import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_ArrayAtomicSimple = _test_is(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => TSON.is(input),
    ArrayAtomicSimple.SPOILERS,
);
