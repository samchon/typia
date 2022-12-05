import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TagPattern = _test_assertParse(
    "TagPattern",
    TagPattern.generate,
    (input) => TSON.assertParse<TagPattern>(input),
    TagPattern.SPOILERS,
);
