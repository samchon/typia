import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagNaN = _test_assertPrune(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.assertPrune(input),
    TagNaN.SPOILERS,
);
