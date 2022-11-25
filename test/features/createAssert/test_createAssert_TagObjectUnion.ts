import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagObjectUnion = _test_assert(
    "TagObjectUnion",
    TagObjectUnion.generate,
    TSON.createAssert<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);