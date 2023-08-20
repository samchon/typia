import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_createPrune_TagRangeBigInt = _test_prune(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    typia.createPrune<TagRangeBigInt>(),
);
