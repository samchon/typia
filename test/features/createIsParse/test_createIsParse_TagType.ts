import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagType = _test_isParse(
    "TagType",
    TagType.generate,
    typia.createIsParse<TagType>(),
    TagType.SPOILERS,
);
