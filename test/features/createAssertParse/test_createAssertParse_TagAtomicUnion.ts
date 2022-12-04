import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TagAtomicUnion = _test_assertParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    TSON.createAssertParse<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
