import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_createIsPrune_TagTypeBigInt = _test_isPrune(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    typia.createIsPrune<TagTypeBigInt>(),
    TagTypeBigInt.SPOILERS,
);
