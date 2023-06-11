import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createValidateParse_TagObjectUnion = _test_validateParse(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createValidateParse<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
