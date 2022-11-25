import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_tag_atomic_union = _test_is(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.is(input),
    TagAtomicUnion.SPOILERS,
);
