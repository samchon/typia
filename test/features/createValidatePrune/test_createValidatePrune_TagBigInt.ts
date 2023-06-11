import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_createValidatePrune_TagBigInt = _test_validatePrune(
    "TagBigInt",
    TagBigInt.generate,
    typia.createValidatePrune<TagBigInt>(),
    TagBigInt.SPOILERS,
);
