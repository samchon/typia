import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_TagObjectUnion = _test_assertPrune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createAssertPrune<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
