import typia from "../../../src";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ArrayUnion = _test_assertPrune(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.assertPrune(input),
    ArrayUnion.SPOILERS,
);
