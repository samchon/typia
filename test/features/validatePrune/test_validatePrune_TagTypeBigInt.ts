import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_validatePrune_TagTypeBigInt = _test_validatePrune(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    (input) => typia.validatePrune<TagTypeBigInt>(input),
    TagTypeBigInt.SPOILERS,
);
