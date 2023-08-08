import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_assert_TagObjectUnion = _test_assert(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createAssert<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
