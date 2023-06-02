import typia from "../../../src";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_DynamicUnion = _test_isPrune(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.isPrune(input),
    DynamicUnion.SPOILERS,
);
