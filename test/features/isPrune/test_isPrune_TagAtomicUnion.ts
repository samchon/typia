import typia from "typia";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_TagAtomicUnion = _test_isPrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.isPrune(input),
    TagAtomicUnion.SPOILERS,
);
