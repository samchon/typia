import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_createValidatePrune_TagTypeBigInt = _test_validatePrune(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    typia.createValidatePrune<TagTypeBigInt>(),
    TagTypeBigInt.SPOILERS,
);
