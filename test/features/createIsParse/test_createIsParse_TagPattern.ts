import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagPattern = _test_isParse(
    "TagPattern",
    TagPattern.generate,
    TSON.createIsParse<TagPattern>(),
    TagPattern.SPOILERS,
);
