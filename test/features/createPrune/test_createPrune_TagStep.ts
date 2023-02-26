import typia from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TagStep = _test_prune(
    "TagStep",
    TagStep.generate,
    typia.createPrune<TagStep>(),
);
