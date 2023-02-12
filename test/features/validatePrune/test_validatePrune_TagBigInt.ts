import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagBigInt = _test_validatePrune(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.validatePrune(input),
    TagBigInt.SPOILERS,
);