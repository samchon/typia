import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagPattern } from "../../structures/TagPattern";

export const test_misc_isPrune_TagPattern = _test_misc_isPrune(
    "TagPattern",
    TagPattern.generate,
    typia.misc.createIsPrune<TagPattern>(),
    TagPattern.SPOILERS,
);
