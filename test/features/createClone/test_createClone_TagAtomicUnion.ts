import typia from "typia";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TagAtomicUnion = _test_clone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createClone<TagAtomicUnion>(),
);
