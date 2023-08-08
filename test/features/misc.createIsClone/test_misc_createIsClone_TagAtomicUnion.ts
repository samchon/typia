import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_misc_isClone_TagAtomicUnion = _test_misc_isClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.misc.createIsClone<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
