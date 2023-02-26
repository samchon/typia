import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_createPrune_TagBigInt = _test_prune(
    "TagBigInt",
    TagBigInt.generate,
    typia.createPrune<TagBigInt>(),
);
