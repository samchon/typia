import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_DynamicUnion = _test_validatePrune(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.validatePrune(input),
    DynamicUnion.SPOILERS,
);
