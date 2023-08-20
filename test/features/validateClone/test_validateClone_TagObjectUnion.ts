import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_validateClone_TagObjectUnion = _test_validateClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.validateClone<TagObjectUnion>(input),
    TagObjectUnion.SPOILERS,
);
