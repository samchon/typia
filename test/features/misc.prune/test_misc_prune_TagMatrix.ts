import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_misc_prune_TagMatrix = _test_misc_prune<TagMatrix>(TagMatrix)(
    (input) => typia.misc.prune<TagMatrix>(input),
);
