import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_TagPattern = _test_assertPrune(
    "TagPattern",
    TagPattern.generate,
    typia.createAssertPrune<TagPattern>(),
    TagPattern.SPOILERS,
);
