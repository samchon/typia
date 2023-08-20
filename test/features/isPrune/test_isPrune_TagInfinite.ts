import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_isPrune_TagInfinite = _test_isPrune(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.isPrune<TagInfinite>(input),
    TagInfinite.SPOILERS,
);
