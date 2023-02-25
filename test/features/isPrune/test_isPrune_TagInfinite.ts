import typia from "../../../src";
import { TagInfinite } from "../../structures/TagInfinite";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_TagInfinite = _test_isPrune(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.isPrune(input),
    TagInfinite.SPOILERS,
);
