import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_validatePrune_ArrayAtomicSimple = _test_validatePrune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.validatePrune(input),
    ArrayAtomicSimple.SPOILERS,
);
