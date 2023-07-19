import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagStep } from "../../structures/TagStep";

export const test_misc_prune_TagStep = _test_misc_prune<TagStep>(TagStep)(
    typia.misc.createPrune<TagStep>(),
);
