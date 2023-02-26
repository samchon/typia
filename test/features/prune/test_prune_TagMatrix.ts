import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_prune_TagMatrix = _test_prune(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.prune(input),
);
