import typia from "../../../src";

import { TagArray } from "../../structures/TagArray";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_TagArray = _test_is(
    "TagArray",
    TagArray.generate,
    typia.createIs<TagArray>(),
    TagArray.SPOILERS,
);
