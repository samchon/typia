import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_is } from "../internal/_test_is";

export const test_is_TagRange = _test_is(
    "TagRange",
    TagRange.generate,
    (input) => TSON.is(input),
    TagRange.SPOILERS,
);
