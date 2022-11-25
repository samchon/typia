import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TagAtomicUnion = _test_equals(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    TSON.createEquals<TagAtomicUnion>(),
);