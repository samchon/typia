import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagArray } from "../../structures/TagArray";

export const test_misc_prune_TagArray = _test_misc_prune<TagArray>(TagArray)(
    (input) => typia.misc.prune(input),
);
