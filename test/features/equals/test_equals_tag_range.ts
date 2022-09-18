import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_equals } from "./_test_equals";

export const test_equals_tag_range = _test_equals(
    "range tag",
    TagRange.generate,
    (input) => TSON.equals(input),
);
