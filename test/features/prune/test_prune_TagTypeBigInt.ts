import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_prune_TagTypeBigInt = _test_prune(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    (input) => typia.prune<TagTypeBigInt>(input),
);
