import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_DynamicEnumeration = _test_assertPrune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.assertPrune(input),
    DynamicEnumeration.SPOILERS,
);
