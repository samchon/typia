import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_is } from "./_test_is";

export const test_is_tag_range = _test_is(
    "range tag",
    TagRange.generate,
    (input) => TSON.is(input),
    TagRange.SPOILERS,
);
