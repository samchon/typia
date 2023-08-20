import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_isClone_TagObjectUnion = _test_isClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.isClone<TagObjectUnion>(input),
    TagObjectUnion.SPOILERS,
);
