import typia from "../../../src";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_createIsClone_TagAtomicUnion = _test_isClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createIsClone<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
