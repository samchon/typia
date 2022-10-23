import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_tag_atomic_union = _test_equals(
    "atomic union tag",
    TagAtomicUnion.generate,
    TSON.createEquals<TagAtomicUnion>(),
);
