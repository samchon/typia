import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_tag_length = _test_validate_equals(
    "length tag",
    TagLength.generate,
    TSON.createValidateEquals<TagLength>(),
);
