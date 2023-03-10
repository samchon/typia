import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagArray } from "../../structures/TagArray";

export const test_createAssertPrune_TagArray = _test_assertPrune(
    "TagArray",
    TagArray.generate,
    typia.createAssertPrune<TagArray>(),
    TagArray.SPOILERS,
);
