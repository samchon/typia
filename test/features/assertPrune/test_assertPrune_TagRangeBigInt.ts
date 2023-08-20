import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_assertPrune_TagRangeBigInt = _test_assertPrune(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    (input) => typia.assertPrune<TagRangeBigInt>(input),
    TagRangeBigInt.SPOILERS,
);
