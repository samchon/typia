import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TagObjectUnion = _test_assertClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createAssertClone<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
