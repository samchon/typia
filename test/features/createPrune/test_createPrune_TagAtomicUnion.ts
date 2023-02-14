import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TagAtomicUnion = _test_prune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createPrune<TagAtomicUnion>(),
);