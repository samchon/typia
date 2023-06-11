import typia from "../../../src";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_DynamicUnion = _test_assertPrune(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.assertPrune(input),
    DynamicUnion.SPOILERS,
);
