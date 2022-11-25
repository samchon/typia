import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TagAtomicUnion = _test_isStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    TSON.createIsStringify<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);