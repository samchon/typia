import typia from "typia";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TagAtomicUnion = _test_isPrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createIsPrune<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
