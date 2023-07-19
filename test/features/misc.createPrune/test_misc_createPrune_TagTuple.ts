import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagTuple } from "../../structures/TagTuple";

export const test_misc_prune_TagTuple = _test_misc_prune<TagTuple>(TagTuple)(
    typia.misc.createPrune<TagTuple>(),
);
