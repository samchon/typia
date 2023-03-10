import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_assertParse_TagObjectUnion = _test_assertParse(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.assertParse<TagObjectUnion>(input),
    TagObjectUnion.SPOILERS,
);
