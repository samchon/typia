import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TagBigInt = _test_isPrune(
    "TagBigInt",
    TagBigInt.generate,
    typia.createIsPrune<TagBigInt>(),
    TagBigInt.SPOILERS,
);