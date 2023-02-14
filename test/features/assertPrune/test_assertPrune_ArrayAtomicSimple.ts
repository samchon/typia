import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ArrayAtomicSimple = _test_assertPrune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.assertPrune(input),
    ArrayAtomicSimple.SPOILERS,
);