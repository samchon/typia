import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ArrayAtomicSimple = _test_assertClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.assertClone(input),
    ArrayAtomicSimple.SPOILERS,
);