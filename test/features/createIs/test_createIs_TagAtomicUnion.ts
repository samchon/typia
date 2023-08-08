import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_is_TagAtomicUnion = _test_is(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createIs<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
