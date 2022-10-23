import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_tag_tuple = _test_validate_equals(
    "tuple tag",
    TagTuple.generate,
    TSON.createValidateEquals<TagTuple>(),
);
