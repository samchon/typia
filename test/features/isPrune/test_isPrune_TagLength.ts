import typia from "typia";

import { TagLength } from "../../structures/TagLength";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_TagLength = _test_isPrune(
    "TagLength",
    TagLength.generate,
    (input) => typia.isPrune(input),
    TagLength.SPOILERS,
);
