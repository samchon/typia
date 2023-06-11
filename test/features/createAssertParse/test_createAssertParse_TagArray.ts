import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagArray } from "../../structures/TagArray";

export const test_createAssertParse_TagArray = _test_assertParse(
    "TagArray",
    TagArray.generate,
    typia.createAssertParse<TagArray>(),
    TagArray.SPOILERS,
);
