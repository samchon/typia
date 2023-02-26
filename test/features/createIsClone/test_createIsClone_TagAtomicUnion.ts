import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createIsClone_TagAtomicUnion = _test_isClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createIsClone<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
