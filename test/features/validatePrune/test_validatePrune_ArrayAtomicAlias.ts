import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_ArrayAtomicAlias = _test_validatePrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.validatePrune(input),
    ArrayAtomicAlias.SPOILERS,
);
