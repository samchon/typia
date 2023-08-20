import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_validatePrune_TagRangeBigInt = _test_validatePrune(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    (input) => typia.validatePrune<TagRangeBigInt>(input),
    TagRangeBigInt.SPOILERS,
);
