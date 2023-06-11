import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_isParse_TagObjectUnion = _test_isParse(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.isParse<TagObjectUnion>(input),
    TagObjectUnion.SPOILERS,
);
