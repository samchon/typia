import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_tag_object_union = _test_validate(
    "object union tag",
    TagObjectUnion.generate,
    TSON.createValidate<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
