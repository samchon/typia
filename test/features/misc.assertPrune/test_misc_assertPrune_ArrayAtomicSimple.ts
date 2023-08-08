import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_assertPrune_ArrayAtomicSimple = _test_misc_assertPrune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.misc.assertPrune(input),
    ArrayAtomicSimple.SPOILERS,
);
