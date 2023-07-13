import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_misc_prune_TagAtomicUnion = _test_misc_prune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.misc.prune(input),
);
