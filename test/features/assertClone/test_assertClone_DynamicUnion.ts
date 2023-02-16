import typia from "typia";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_DynamicUnion = _test_assertClone(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.assertClone(input),
    DynamicUnion.SPOILERS,
);
