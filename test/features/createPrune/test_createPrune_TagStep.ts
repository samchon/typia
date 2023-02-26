import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagStep } from "../../structures/TagStep";

export const test_createPrune_TagStep = _test_prune(
    "TagStep",
    TagStep.generate,
    typia.createPrune<TagStep>(),
);
