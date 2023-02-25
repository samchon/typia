import typia from "../../../src";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagMatrix = _test_assertPrune(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.assertPrune(input),
    TagMatrix.SPOILERS,
);
