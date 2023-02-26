import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_validatePrune_TagBigInt = _test_validatePrune(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.validatePrune(input),
    TagBigInt.SPOILERS,
);
