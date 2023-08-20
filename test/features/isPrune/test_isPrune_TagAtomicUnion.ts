import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_isPrune_TagAtomicUnion = _test_isPrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.isPrune<TagAtomicUnion>(input),
    TagAtomicUnion.SPOILERS,
);
