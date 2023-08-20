import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_assertPrune_TagTypeBigInt = _test_assertPrune(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    (input) => typia.assertPrune<TagTypeBigInt>(input),
    TagTypeBigInt.SPOILERS,
);
