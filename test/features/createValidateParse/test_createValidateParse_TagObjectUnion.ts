import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TagObjectUnion = _test_validateParse(
    "TagObjectUnion",
    TagObjectUnion.generate,
    TSON.createValidateParse<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
