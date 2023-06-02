import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assertPrune_DynamicEnumeration = _test_assertPrune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.assertPrune(input),
    DynamicEnumeration.SPOILERS,
);
