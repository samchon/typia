import typia from "typia";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_TagAtomicUnion = _test_assertPrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createAssertPrune<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
