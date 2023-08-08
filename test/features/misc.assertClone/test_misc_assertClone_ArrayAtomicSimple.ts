import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_assertClone_ArrayAtomicSimple = _test_misc_assertClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.misc.assertClone(input),
    ArrayAtomicSimple.SPOILERS,
);
