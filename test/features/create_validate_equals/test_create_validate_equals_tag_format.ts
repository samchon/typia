import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_tag_format = _test_validate_equals(
    "format tag",
    TagFormat.generate,
    TSON.createValidateEquals<TagFormat>(),
);
