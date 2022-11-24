import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_tag_atomic_union = _test_clone(
    "atomic union tag",
    TagAtomicUnion.generate,
    TSON.createClone<TagAtomicUnion>(),
);
