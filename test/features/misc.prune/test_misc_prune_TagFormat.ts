import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagFormat } from "../../structures/TagFormat";

export const test_misc_prune_TagFormat = _test_misc_prune(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.misc.prune(input),
);
