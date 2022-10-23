import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_tag_range = _test_validate(
    "range tag",
    TagRange.generate,
    TSON.createValidate<TagRange>(),
    TagRange.SPOILERS,
);
