import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssertPrune_DynamicEnumeration = _test_assertPrune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createAssertPrune<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
