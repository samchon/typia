import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_prune_TagAtomicUnion = _test_prune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.prune<TagAtomicUnion>(input),
);
