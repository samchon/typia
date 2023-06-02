import typia from "../../../src";

import { TagNaN } from "../../structures/TagNaN";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_TagNaN = _test_isPrune(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.isPrune(input),
    TagNaN.SPOILERS,
);
