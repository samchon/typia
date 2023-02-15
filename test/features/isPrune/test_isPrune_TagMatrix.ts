import typia from "typia";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_TagMatrix = _test_isPrune(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.isPrune(input),
    TagMatrix.SPOILERS,
);
