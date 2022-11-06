import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_tag_atomic_union = _test_is_clone(
    "atomic union tag",
    TagAtomicUnion.generate,
    TSON.createIsClone<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
