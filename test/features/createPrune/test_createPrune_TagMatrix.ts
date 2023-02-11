import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TagMatrix = _test_prune(
    "TagMatrix",
    TagMatrix.generate,
    typia.createPrune<TagMatrix>(),
);