import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tag_atomic_union = _test_is_clone(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.isClone(input),
    TagAtomicUnion.SPOILERS,
);
