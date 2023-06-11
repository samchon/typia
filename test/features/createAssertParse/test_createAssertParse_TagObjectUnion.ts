import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_TagObjectUnion = _test_assertParse(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createAssertParse<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
