import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TagArray = _test_assertParse(
    "TagArray",
    TagArray.generate,
    TSON.createAssertParse<TagArray>(),
    TagArray.SPOILERS,
);
