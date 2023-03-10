import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagPattern } from "../../structures/TagPattern";

export const test_createIsParse_TagPattern = _test_isParse(
    "TagPattern",
    TagPattern.generate,
    typia.createIsParse<TagPattern>(),
    TagPattern.SPOILERS,
);
