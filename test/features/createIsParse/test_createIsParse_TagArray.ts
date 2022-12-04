import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagArray = _test_isParse(
    "TagArray",
    TagArray.generate,
    TSON.createIsParse<TagArray>(),
    TagArray.SPOILERS,
);
