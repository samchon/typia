import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TagNaN = _test_prune(
    "TagNaN",
    TagNaN.generate,
    typia.createPrune<TagNaN>(),
);