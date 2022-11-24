import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_tag_range = _test_equals(
    "range tag",
    TagRange.generate,
    TSON.createEquals<TagRange>(),
);
