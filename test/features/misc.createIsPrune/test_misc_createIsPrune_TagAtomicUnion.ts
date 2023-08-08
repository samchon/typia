import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_misc_isPrune_TagAtomicUnion = _test_misc_isPrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.misc.createIsPrune<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
