import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagTuple } from "../../structures/TagTuple";

export const test_createPrune_TagTuple = _test_prune(
    "TagTuple",
    TagTuple.generate,
    typia.createPrune<TagTuple>(),
);
