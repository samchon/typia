import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createValidatePrune_ArrayUnion = _test_validatePrune(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createValidatePrune<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
