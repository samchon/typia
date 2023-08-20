import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_createIsPrune_TagRangeBigInt = _test_isPrune(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    typia.createIsPrune<TagRangeBigInt>(),
    TagRangeBigInt.SPOILERS,
);
