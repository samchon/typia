import typia from "typia";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TagMatrix = _test_isClone(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.isClone(input),
    TagMatrix.SPOILERS,
);
