import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_misc_assertPrune_TagBigInt = _test_misc_assertPrune(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.misc.assertPrune(input),
    TagBigInt.SPOILERS,
);
