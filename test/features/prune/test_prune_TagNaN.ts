import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagNaN } from "../../structures/TagNaN";

export const test_prune_TagNaN = _test_prune(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.prune(input),
);
