import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_TagObjectUnion = _test_assertPrune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.assertPrune(input),
    TagObjectUnion.SPOILERS,
);
