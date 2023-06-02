import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_isClone_ArrayAtomicSimple = _test_isClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.isClone(input),
    ArrayAtomicSimple.SPOILERS,
);
