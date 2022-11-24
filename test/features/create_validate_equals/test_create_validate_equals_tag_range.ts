import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_tag_range = _test_validate_equals(
    "range tag",
    TagRange.generate,
    TSON.createValidateEquals<TagRange>(),
);
