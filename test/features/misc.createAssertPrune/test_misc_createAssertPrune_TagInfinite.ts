import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_misc_assertPrune_TagInfinite = _test_misc_assertPrune(
    "TagInfinite",
    TagInfinite.generate,
    typia.misc.createAssertPrune<TagInfinite>(),
    TagInfinite.SPOILERS,
);
