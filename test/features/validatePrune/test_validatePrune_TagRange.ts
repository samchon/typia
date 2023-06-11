import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagRange } from "../../structures/TagRange";

export const test_validatePrune_TagRange = _test_validatePrune(
    "TagRange",
    TagRange.generate,
    (input) => typia.validatePrune(input),
    TagRange.SPOILERS,
);
