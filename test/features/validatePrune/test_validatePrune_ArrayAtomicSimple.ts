import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ArrayAtomicSimple = _test_validatePrune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.validatePrune(input),
    ArrayAtomicSimple.SPOILERS,
);
