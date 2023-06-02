import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createValidatePrune_ArrayAtomicAlias = _test_validatePrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createValidatePrune<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
