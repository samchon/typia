import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_tag_object_union = _test_validate_equals(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.validateEquals(input),
);
