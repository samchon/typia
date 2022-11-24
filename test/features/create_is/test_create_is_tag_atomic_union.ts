import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_is } from "../internal/_test_is";

export const test_create_is_tag_atomic_union = _test_is(
    "atomic union tag",
    TagAtomicUnion.generate,
    TSON.createIs<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
