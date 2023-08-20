import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagTuple } from "../../structures/TagTuple";

export const test_prune_TagTuple = _test_prune(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.prune<TagTuple>(input),
);
