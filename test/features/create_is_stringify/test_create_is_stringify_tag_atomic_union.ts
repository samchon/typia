import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_tag_atomic_union = _test_is_stringify(
    "atomic union tag",
    TagAtomicUnion.generate,
    TSON.createIsStringify<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
