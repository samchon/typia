import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_tag_object_union = _test_validate(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.validate(input),
    TagObjectUnion.SPOILERS,
);
