import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_prune_TagRangeBigInt = _test_prune(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    (input) => typia.prune<TagRangeBigInt>(input),
);
