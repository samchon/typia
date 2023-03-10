import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagNaN } from "../../structures/TagNaN";

export const test_createPrune_TagNaN = _test_prune(
    "TagNaN",
    TagNaN.generate,
    typia.createPrune<TagNaN>(),
);
