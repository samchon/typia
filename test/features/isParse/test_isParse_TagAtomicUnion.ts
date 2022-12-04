import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TagAtomicUnion = _test_isParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => TSON.isParse<TagAtomicUnion>(input),
    TagAtomicUnion.SPOILERS,
);
