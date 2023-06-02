import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_isParse_TagType = _test_isParse(
    "TagType",
    TagType.generate,
    (input) => typia.isParse<TagType>(input),
    TagType.SPOILERS,
);
