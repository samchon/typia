import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TagAtomicUnion = _test_isStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => TSON.isStringify(input),
    TagAtomicUnion.SPOILERS,
);