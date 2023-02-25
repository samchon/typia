import typia from "../../../src";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_DynamicUnion = _test_assertPrune(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createAssertPrune<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
