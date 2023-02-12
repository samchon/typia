import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_DynamicUnion = _test_validatePrune(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createValidatePrune<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);