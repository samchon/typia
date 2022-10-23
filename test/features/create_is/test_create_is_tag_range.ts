import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_is } from "./../is/_test_is";

export const test_create_is_tag_range = _test_is(
    "range tag",
    TagRange.generate,
    TSON.createIs<TagRange>(),
    TagRange.SPOILERS,
);
