import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createValidatePrune_ArrayAtomicSimple = _test_validatePrune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createValidatePrune<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
