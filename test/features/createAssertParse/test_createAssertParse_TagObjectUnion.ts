import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createAssertParse_TagObjectUnion = _test_assertParse(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createAssertParse<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
