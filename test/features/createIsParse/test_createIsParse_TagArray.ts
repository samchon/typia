import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagArray } from "../../structures/TagArray";

export const test_createIsParse_TagArray = _test_isParse(
    "TagArray",
    TagArray.generate,
    typia.createIsParse<TagArray>(),
    TagArray.SPOILERS,
);
