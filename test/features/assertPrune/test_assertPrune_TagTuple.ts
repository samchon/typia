import typia from "../../../src";

import { TagTuple } from "../../structures/TagTuple";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_TagTuple = _test_assertPrune(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.assertPrune(input),
    TagTuple.SPOILERS,
);
