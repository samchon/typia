import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagArray } from "../../structures/TagArray";

export const test_createPrune_TagArray = _test_prune(
    "TagArray",
    TagArray.generate,
    typia.createPrune<TagArray>(),
);
