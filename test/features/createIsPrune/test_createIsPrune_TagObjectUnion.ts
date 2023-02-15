import typia from "typia";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TagObjectUnion = _test_isPrune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createIsPrune<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
