import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_isParse_TagAtomicUnion = _test_isParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.isParse<TagAtomicUnion>(input),
    TagAtomicUnion.SPOILERS,
);
