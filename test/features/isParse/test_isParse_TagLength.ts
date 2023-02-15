import typia from "typia";

import { TagLength } from "../../structures/TagLength";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TagLength = _test_isParse(
    "TagLength",
    TagLength.generate,
    (input) => typia.isParse<TagLength>(input),
    TagLength.SPOILERS,
);
