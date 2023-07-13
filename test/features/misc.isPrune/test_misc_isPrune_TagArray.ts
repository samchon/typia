import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagArray } from "../../structures/TagArray";

export const test_misc_isPrune_TagArray = _test_misc_isPrune(
    "TagArray",
    TagArray.generate,
    (input) => typia.misc.isPrune(input),
    TagArray.SPOILERS,
);
