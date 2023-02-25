import typia from "../../../src";

import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ArrayMatrix = _test_validatePrune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createValidatePrune<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
