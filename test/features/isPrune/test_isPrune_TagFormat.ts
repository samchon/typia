import typia from "../../../src";

import { TagFormat } from "../../structures/TagFormat";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_TagFormat = _test_isPrune(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.isPrune(input),
    TagFormat.SPOILERS,
);
