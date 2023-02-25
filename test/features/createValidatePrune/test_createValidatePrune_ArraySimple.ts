import typia from "../../../src";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ArraySimple = _test_validatePrune(
    "ArraySimple",
    ArraySimple.generate,
    typia.createValidatePrune<ArraySimple>(),
    ArraySimple.SPOILERS,
);
