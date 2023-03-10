import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagPattern } from "../../structures/TagPattern";

export const test_validatePrune_TagPattern = _test_validatePrune(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.validatePrune(input),
    TagPattern.SPOILERS,
);
