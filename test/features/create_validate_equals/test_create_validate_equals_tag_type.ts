import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_tag_type = _test_validate_equals(
    "type tag",
    TagType.generate,
    TSON.createValidateEquals<TagType>(),
);
