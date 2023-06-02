import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_validateParse_TagObjectUnion = _test_validateParse(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.validateParse<TagObjectUnion>(input),
    TagObjectUnion.SPOILERS,
);
