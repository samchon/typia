import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_tag_object_union =
    _test_validate_equals(
        "object union tag",
        TagObjectUnion.generate,
        TSON.createValidateEquals<TagObjectUnion>(),
    );
