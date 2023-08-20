import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_isPrune_TagRangeBigInt = _test_isPrune(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    (input) => typia.isPrune<TagRangeBigInt>(input),
    TagRangeBigInt.SPOILERS,
);
