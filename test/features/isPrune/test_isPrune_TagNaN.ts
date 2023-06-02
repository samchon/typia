import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagNaN } from "../../structures/TagNaN";

export const test_isPrune_TagNaN = _test_isPrune(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.isPrune(input),
    TagNaN.SPOILERS,
);
