import typia from "../../../src";

import { TagLength } from "../../structures/TagLength";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagLength = _test_assertPrune(
    "TagLength",
    TagLength.generate,
    (input) => typia.assertPrune(input),
    TagLength.SPOILERS,
);
