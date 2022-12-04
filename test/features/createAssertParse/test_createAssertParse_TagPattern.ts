import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TagPattern = _test_assertParse(
    "TagPattern",
    TagPattern.generate,
    TSON.createAssertParse<TagPattern>(),
    TagPattern.SPOILERS,
);
