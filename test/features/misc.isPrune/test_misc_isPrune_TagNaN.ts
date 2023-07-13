import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagNaN } from "../../structures/TagNaN";

export const test_misc_isPrune_TagNaN = _test_misc_isPrune(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.misc.isPrune(input),
    TagNaN.SPOILERS,
);
