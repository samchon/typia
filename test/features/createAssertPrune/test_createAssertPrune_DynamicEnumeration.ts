import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_DynamicEnumeration = _test_assertPrune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createAssertPrune<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
