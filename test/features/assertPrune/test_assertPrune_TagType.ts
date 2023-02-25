import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagType = _test_assertPrune(
    "TagType",
    TagType.generate,
    (input) => typia.assertPrune(input),
    TagType.SPOILERS,
);
