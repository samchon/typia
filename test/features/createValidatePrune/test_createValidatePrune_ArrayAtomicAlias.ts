import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ArrayAtomicAlias = _test_validatePrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createValidatePrune<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
