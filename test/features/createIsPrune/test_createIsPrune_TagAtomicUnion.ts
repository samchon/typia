import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createIsPrune_TagAtomicUnion = _test_isPrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createIsPrune<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
