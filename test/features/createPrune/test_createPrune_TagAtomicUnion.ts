import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createPrune_TagAtomicUnion = _test_prune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createPrune<TagAtomicUnion>(),
);
