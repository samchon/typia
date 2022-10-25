import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_tag_range = _test_is_stringify(
    "range tag",
    TagRange.generate,
    TSON.createIsStringify<TagRange>(),
    TagRange.SPOILERS,
);
