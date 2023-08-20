import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_assertPrune_TagInfinite = _test_assertPrune(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.assertPrune<TagInfinite>(input),
    TagInfinite.SPOILERS,
);
