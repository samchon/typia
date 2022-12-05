import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TagArray = _test_assertParse(
    "TagArray",
    TagArray.generate,
    (input) => TSON.assertParse<TagArray>(input),
    TagArray.SPOILERS,
);
