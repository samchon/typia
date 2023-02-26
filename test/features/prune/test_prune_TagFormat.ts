import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagFormat } from "../../structures/TagFormat";

export const test_prune_TagFormat = _test_prune(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.prune(input),
);
