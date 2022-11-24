import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_tag_range = _test_stringify(
    "range tag",
    TagRange.generate,
    TSON.createStringify<TagRange>(),
);
