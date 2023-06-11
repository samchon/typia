import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagPattern } from "../../structures/TagPattern";

export const test_createAssertParse_TagPattern = _test_assertParse(
    "TagPattern",
    TagPattern.generate,
    typia.createAssertParse<TagPattern>(),
    TagPattern.SPOILERS,
);
