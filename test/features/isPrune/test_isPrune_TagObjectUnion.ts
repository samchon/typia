import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_TagObjectUnion = _test_isPrune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.isPrune(input),
    TagObjectUnion.SPOILERS,
);
