import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagPattern } from "../../structures/TagPattern";

export const test_createAssertPrune_TagPattern = _test_assertPrune(
    "TagPattern",
    TagPattern.generate,
    typia.createAssertPrune<TagPattern>(),
    TagPattern.SPOILERS,
);
