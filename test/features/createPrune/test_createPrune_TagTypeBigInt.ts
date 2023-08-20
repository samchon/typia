import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_createPrune_TagTypeBigInt = _test_prune(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    typia.createPrune<TagTypeBigInt>(),
);
