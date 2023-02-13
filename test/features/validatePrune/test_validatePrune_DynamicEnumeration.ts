import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_DynamicEnumeration = _test_validatePrune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.validatePrune(input),
    DynamicEnumeration.SPOILERS,
);